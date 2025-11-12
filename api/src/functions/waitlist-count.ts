import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { TableClient } from "@azure/data-tables";

async function waitlistCount(
  req: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log("Waitlist count request received");

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "public, max-age=30",
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
    const connectionString =
      process.env.AZURE_STORAGE_CONNECTION_STRING ||
      process.env.AzureWebJobsStorage;

    if (!connectionString) {
      context.error("Storage connection string not configured");
      return {
        status: 200,
        headers,
        jsonBody: {
          count: 0,
          max: 100,
          remaining: 100,
          percentage: 0,
        },
      };
    }

    const tableClient = TableClient.fromConnectionString(
      connectionString,
      "WaitlistSignups"
    );

    await tableClient.createTable().catch(() => {});

    // Count entities
    const entities = tableClient.listEntities();
    let count = 0;
    for await (const _entity of entities) {
      count++;
    }

    const max = 100;
    const remaining = Math.max(max - count, 0);
    const percentage = Math.min((count / max) * 100, 100);

    return {
      status: 200,
      headers,
      jsonBody: {
        count,
        max,
        remaining,
        percentage: Math.round(percentage * 10) / 10,
      },
    };
  } catch (error: any) {
    context.error("Error fetching waitlist count:", error);

    return {
      status: 200,
      headers,
      jsonBody: {
        count: 0,
        max: 100,
        remaining: 100,
        percentage: 0,
      },
    };
  }
}

app.http("waitlist-count", {
  methods: ["GET", "OPTIONS"],
  authLevel: "anonymous",
  route: "waitlist/count",
  handler: waitlistCount,
});
