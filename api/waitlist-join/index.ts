import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { TableClient } from "@azure/data-tables";

// Email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Simple rate limiting (in-memory for MVP)
const recentSignups = new Map<string, number>();

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const lastSignup = recentSignups.get(ip) || 0;
  const minuteAgo = now - 60000;

  if (lastSignup > minuteAgo) {
    return true;
  }

  recentSignups.set(ip, now);

  // Cleanup old entries
  for (const [key, time] of recentSignups.entries()) {
    if (time < minuteAgo) {
      recentSignups.delete(key);
    }
  }

  return false;
};

async function waitlistJoin(
  req: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log("Waitlist join request received");

  // CORS headers
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle OPTIONS preflight
  if (req.method === "OPTIONS") {
    return {
      status: 200,
      headers,
      body: "",
    };
  }

  try {
    // Parse request body
    const body = await req.json() as any;
    const { email, name, phone, website } = body;

    // Validation
    if (!email || !name) {
      return {
        status: 400,
        headers,
        jsonBody: { error: "Email and name are required" },
      };
    }

    if (!isValidEmail(email)) {
      return {
        status: 400,
        headers,
        jsonBody: { error: "Invalid email format" },
      };
    }

    // Honeypot check (if website field is filled, it's a bot)
    if (website) {
      context.log("Honeypot triggered - bot detected");
      return {
        status: 400,
        headers,
        jsonBody: { error: "Invalid submission" },
      };
    }

    // Rate limiting
    const clientIp = req.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(clientIp)) {
      return {
        status: 429,
        headers,
        jsonBody: { error: "Too many requests. Please try again in a minute." },
      };
    }

    // Initialize Table Storage client
    const connectionString =
      process.env.AZURE_STORAGE_CONNECTION_STRING ||
      process.env.AzureWebJobsStorage;

    if (!connectionString) {
      context.error("Storage connection string not configured");
      return {
        status: 500,
        headers,
        jsonBody: { error: "Server configuration error" },
      };
    }

    const tableClient = TableClient.fromConnectionString(
      connectionString,
      "WaitlistSignups"
    );

    // Create table if it doesn't exist
    await tableClient.createTable().catch(() => {
      // Table might already exist, that's fine
    });

    // Check if email already exists
    try {
      await tableClient.getEntity("waitlist", email.toLowerCase());
      return {
        status: 409,
        headers,
        jsonBody: {
          error: "This email is already on the waitlist",
          alreadyRegistered: true
        },
      };
    } catch (error: any) {
      if (error.statusCode !== 404) {
        throw error;
      }
      // Email doesn't exist - good, continue
    }

    // Get current count to assign position
    const entities = tableClient.listEntities();
    let count = 0;
    for await (const _entity of entities) {
      count++;
    }

    const position = count + 1;

    // Check if waitlist is full
    const isFull = count >= 100;

    // Create entity
    const entity = {
      partitionKey: "waitlist",
      rowKey: email.toLowerCase(),
      email: email.toLowerCase(),
      name: name,
      phone: phone || "",
      position: position,
      createdAt: new Date().toISOString(),
      ipAddress: clientIp,
      confirmed: false,
      isOverflow: isFull,
    };

    await tableClient.createEntity(entity);

    context.log(`New signup: ${email} (Position: ${position})`);

    // Success response
    return {
      status: 201,
      headers,
      jsonBody: {
        success: true,
        position: position,
        isFull: isFull,
        message: isFull
          ? "The first 100 spots are full, but you've been added to the extended waitlist!"
          : "Successfully joined the waitlist!",
      },
    };
  } catch (error: any) {
    context.error("Error processing waitlist signup:", error);

    return {
      status: 500,
      headers,
      jsonBody: {
        error: "Failed to process signup. Please try again.",
      },
    };
  }
}

app.http("waitlist-join", {
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  route: "waitlist/join",
  handler: waitlistJoin,
});
