# Quick Start Guide

## ✅ What's Done

All code is complete and ready! Here's what was built:

### Frontend
- ✅ New `/waitlist` route
- ✅ Waitlist form (name, email, phone)
- ✅ Animated progress bar showing spots filled
- ✅ Real-time counter
- ✅ Benefits section
- ✅ Success confirmation
- ✅ Mobile responsive + dark mode

### Backend (Azure Functions)
- ✅ POST `/api/waitlist/join` - Join waitlist endpoint
- ✅ GET `/api/waitlist/count` - Get stats endpoint
- ✅ Email validation
- ✅ Duplicate prevention
- ✅ Rate limiting
- ✅ Honeypot spam protection

### Infrastructure
- ✅ GitHub Actions workflow updated
- ✅ API dependencies installed
- ✅ Build verified successfully

## 🔧 What You Need to Do

### 1. Create Azure Storage (5 minutes)

Go to [Azure Portal](https://portal.azure.com):

1. **Create Storage Account**
   - Resource Group: `pain-plus-rg`
   - Name: `painpluswaitlist` (or any unique name)
   - Region: Central US
   - Type: Standard, LRS

2. **Create Table**
   - In storage account → Storage browser → Tables
   - Create table named: `WaitlistSignups`

3. **Get Connection String**
   - Storage account → Access keys → Show → Copy "Connection string"

4. **Configure Static Web App**
   - Go to PainPlus-Site → Configuration
   - Add application setting:
     - Name: `AZURE_STORAGE_CONNECTION_STRING`
     - Value: [paste connection string]
   - Save

### 2. Deploy (1 minute)

```bash
git add .
git commit -m "Add waitlist feature with Azure Functions backend"
git push origin dev  # or merge to main
```

GitHub Actions will automatically deploy everything!

### 3. Test (2 minutes)

Once deployed, visit:
- https://happy-bay-0d3fcc110.3.azurestaticapps.net/waitlist

Try signing up and watch the counter update!

## 🧪 Local Testing (Optional)

If you want to test locally first:

```bash
# Terminal 1 - API
cd api
# Edit local.settings.json with your connection string
npm start

# Terminal 2 - Frontend
cd frontend  
npm run dev
```

Visit: http://localhost:5173/waitlist

## 📊 Viewing Signups

Azure Portal → Storage account → Storage browser → Tables → WaitlistSignups

You'll see all signups with:
- Email (rowKey)
- Name
- Phone
- Position
- Timestamp
- IP address

## 💰 Costs

**$0/month** on free tier (sufficient for MVP)

## 🎉 That's It!

Your waitlist is production-ready. See `WAITLIST_SETUP.md` for detailed documentation.

## 🆘 Need Help?

Common issues:
- **API returns 0 count**: Check storage connection string is configured
- **Can't create storage**: You may need Owner/Contributor role
- **Build fails**: Make sure all dependencies are installed

Check the full setup guide: `WAITLIST_SETUP.md`
