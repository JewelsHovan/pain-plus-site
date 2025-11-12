# PAin+ Waitlist API

Azure Functions backend for the waitlist feature.

## Quick Start

```bash
# Install dependencies
npm install

# Start local dev server
npm start
```

API will be available at: http://localhost:7071

## Endpoints

- `POST /api/waitlist/join` - Join waitlist
- `GET /api/waitlist/count` - Get current count

## Configuration

Before running locally, configure `local.settings.json` with your Azure Storage connection string.

See `/WAITLIST_SETUP.md` in the project root for full setup instructions.
