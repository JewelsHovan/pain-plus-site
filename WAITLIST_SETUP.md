# Waitlist Feature Setup Guide

## Overview

This waitlist feature uses:
- **Frontend**: React components in `/frontend/src/pages/Waitlist.tsx`
- **Backend**: Azure Functions in `/api/`
- **Storage**: Azure Table Storage for signup data

## Azure Portal Setup (Required)

### Step 1: Create Storage Account

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to Resource Groups → **pain-plus-rg**
3. Click **+ Create** → Search for "Storage Account"
4. Fill in:
   - **Storage account name**: `painpluswaitlist` (must be globally unique, lowercase, no hyphens)
   - **Region**: Central US
   - **Performance**: Standard
   - **Redundancy**: LRS (Locally Redundant Storage)
5. Click **Review + Create** → **Create**

### Step 2: Get Connection String

1. Once created, go to the storage account
2. Left menu: **Access keys** (under Security + networking)
3. Click **Show** next to key1
4. Copy the **Connection string**

### Step 3: Create Table

1. In the same storage account, go to **Storage browser** → **Tables**
2. Click **+ Add table**
3. Name it: `WaitlistSignups`
4. Click **OK**

### Step 4: Configure Static Web App

1. Go to Resource Groups → **pain-plus-rg** → **PainPlus-Site** (Static Web App)
2. Left menu: **Configuration**
3. Click **+ Add** under Application settings
4. Add:
   - **Name**: `AZURE_STORAGE_CONNECTION_STRING`
   - **Value**: [Paste the connection string from Step 2]
5. Click **OK** → **Save**

## Local Development Setup

### 1. Install Azure Functions Core Tools

```bash
npm install -g azure-functions-core-tools@4
```

### 2. Configure Local Settings

Edit `api/local.settings.json` and add your connection string:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AZURE_STORAGE_CONNECTION_STRING": "YOUR_CONNECTION_STRING_HERE"
  },
  "Host": {
    "LocalHttpPort": 7071,
    "CORS": "*"
  }
}
```

### 3. Run Locally

Terminal 1 - Frontend:
```bash
cd frontend
npm run dev
```

Terminal 2 - API:
```bash
cd api
npm start
```

### 4. Test

- Frontend: http://localhost:5173/waitlist
- API endpoints:
  - POST http://localhost:7071/api/waitlist/join
  - GET http://localhost:7071/api/waitlist/count

## Deployment

The setup is complete! Just push to the `main` branch:

```bash
git add .
git commit -m "Add waitlist feature"
git push origin main
```

GitHub Actions will automatically:
1. Build the frontend
2. Build the Azure Functions API
3. Deploy both to Azure Static Web Apps

## API Endpoints

### POST /api/waitlist/join

Join the waitlist

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234"
}
```

**Response (201):**
```json
{
  "success": true,
  "position": 42,
  "isFull": false,
  "message": "Successfully joined the waitlist!"
}
```

### GET /api/waitlist/count

Get current waitlist stats

**Response (200):**
```json
{
  "count": 42,
  "max": 100,
  "remaining": 58,
  "percentage": 42.0
}
```

## Managing Signups

### View Signups in Azure Portal

1. Go to your storage account → **Storage browser** → **Tables** → **WaitlistSignups**
2. See all signups with details

### Export to Excel

1. In Azure Storage Explorer (desktop app or portal)
2. Right-click table → Export
3. Save as CSV

### Query Signups

Using Azure CLI:
```bash
az storage entity query \
  --table-name WaitlistSignups \
  --connection-string "YOUR_CONNECTION_STRING"
```

## Features Implemented

✅ Waitlist signup form (name, email, phone)
✅ Real-time counter with animated progress bar
✅ 100-person limit with overflow handling
✅ Email validation and duplicate prevention
✅ Rate limiting (1 signup per minute per IP)
✅ Honeypot spam protection
✅ Urgency messaging based on remaining spots
✅ Success confirmation with position number
✅ Mobile-responsive design
✅ Dark mode support

## Costs

With free tier:
- Azure Static Web Apps: Free (100GB bandwidth/month)
- Azure Functions: Free (1M executions/month)
- Table Storage: ~$0.002/month for 1000 signups

**Total: Essentially $0/month for MVP**

## Troubleshooting

### "Storage connection string not configured"

Make sure you added `AZURE_STORAGE_CONNECTION_STRING` in:
- Azure Portal → Static Web App → Configuration
- Local: `api/local.settings.json`

### API returns 0 count

- Check that the table `WaitlistSignups` exists
- Verify connection string is correct
- Check Azure Function logs in Application Insights

### CORS errors locally

Make sure you're running both frontend (port 5173) and API (port 7071) simultaneously.

## Security Notes

- Connection strings are stored securely in Azure configuration
- Rate limiting prevents abuse (1 signup/minute/IP)
- Honeypot field catches bots
- Email validation prevents invalid submissions
- All data stored in Azure (GDPR compliant)

## Next Steps (Optional Enhancements)

Phase 2 ideas:
- Email confirmations (Azure Communication Services)
- Admin dashboard to view signups
- Real-time updates via SignalR
- Analytics tracking
- A/B testing different messaging
