import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { TableClient } from "@azure/data-tables";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("Waitlist count request received");

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "public, max-age=30", // Cache for 30 seconds
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
    const connectionString =
      process.env.AZURE_STORAGE_CONNECTION_STRING ||
      process.env.AzureWebJobsStorage;

    if (!connectionString) {
      context.log.error("Storage connection string not configured");
      // Return 0 as fallback
      context.res = {
        status: 200,
        headers,
        body: {
          count: 0,
          max: 100,
          remaining: 100,
          percentage: 0,
        },
      };
      return;
    }

    const tableClient = TableClient.fromConnectionString(
      connectionString,
      "WaitlistSignups"
    );

    // Create table if doesn't exist
    await tableClient.createTable().catch(() => {
      // Table might already exist
    });

    // Count entities
    const entities = tableClient.listEntities();
    let count = 0;
    for await (const _entity of entities) {
      count++;
    }

    const max = 100;
    const remaining = Math.max(max - count, 0);
    const percentage = Math.min((count / max) * 100, 100);

    context.res = {
      status: 200,
      headers,
      body: {
        count,
        max,
        remaining,
        percentage: Math.round(percentage * 10) / 10, // Round to 1 decimal
      },
    };
  } catch (error: any) {
    context.log.error("Error fetching waitlist count:", error);

    context.res = {
      status: 200, // Return 200 even on error with default values
      headers,
      body: {
        count: 0,
        max: 100,
        remaining: 100,
        percentage: 0,
      },
    };
  }
};

export default httpTrigger;
