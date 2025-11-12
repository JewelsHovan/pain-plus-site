import { AzureFunction, Context, HttpRequest } from "@azure/functions";
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

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
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
    context.res = {
      status: 200,
      headers,
      body: "",
    };
    return;
  }

  try {
    // Parse request body
    const { email, name, phone } = req.body || {};

    // Validation
    if (!email || !name) {
      context.res = {
        status: 400,
        headers,
        body: { error: "Email and name are required" },
      };
      return;
    }

    if (!isValidEmail(email)) {
      context.res = {
        status: 400,
        headers,
        body: { error: "Invalid email format" },
      };
      return;
    }

    // Honeypot check (if website field is filled, it's a bot)
    if (req.body.website) {
      context.log("Honeypot triggered - bot detected");
      context.res = {
        status: 400,
        headers,
        body: { error: "Invalid submission" },
      };
      return;
    }

    // Rate limiting
    const clientIp = (req.headers["x-forwarded-for"] as string) || "unknown";
    if (isRateLimited(clientIp)) {
      context.res = {
        status: 429,
        headers,
        body: { error: "Too many requests. Please try again in a minute." },
      };
      return;
    }

    // Initialize Table Storage client
    const connectionString =
      process.env.AZURE_STORAGE_CONNECTION_STRING ||
      process.env.AzureWebJobsStorage;

    if (!connectionString) {
      context.log.error("Storage connection string not configured");
      context.res = {
        status: 500,
        headers,
        body: { error: "Server configuration error" },
      };
      return;
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
      context.res = {
        status: 409,
        headers,
        body: {
          error: "This email is already on the waitlist",
          alreadyRegistered: true
        },
      };
      return;
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
    context.res = {
      status: 201,
      headers,
      body: {
        success: true,
        position: position,
        isFull: isFull,
        message: isFull
          ? "The first 100 spots are full, but you've been added to the extended waitlist!"
          : "Successfully joined the waitlist!",
      },
    };
  } catch (error: any) {
    context.log.error("Error processing waitlist signup:", error);

    context.res = {
      status: 500,
      headers,
      body: {
        error: "Failed to process signup. Please try again.",
      },
    };
  }
};

export default httpTrigger;
