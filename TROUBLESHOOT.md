# Troubleshooting Guide

## Current Status
- Server is running on port 3000
- Dependencies installed
- .env.local exists

## Step 1: Temporarily Disable Chatbot

I've disabled the chatbot import to isolate the error. Try refreshing http://localhost:3000

If it works now, the issue is with the chatbot component.

## Step 2: Check Browser Console

Open DevTools (F12) and check:
1. **Console tab** - What errors do you see?
2. **Network tab** - Which requests are failing?
3. **What's the exact error message?**

## Step 3: Check Terminal Output

In the terminal where `npm run dev` is running, what errors do you see?

## Common Issues & Fixes

### Issue: Import Errors
**Error**: `Cannot find module '@/src/components/ui/Chatbot'`

**Fix**: The path alias might not be resolving. Try:
```tsx
import Chatbot from '../../src/components/ui/Chatbot';
```

### Issue: API Route Errors
**Error**: `Failed to fetch` or `500` on `/api/chat`

**Fix**: Check if `.env.local` is being read:
```bash
cat .env.local
# Should show: GOOGLE_GEMINI_API_KEY=...
```

### Issue: Three.js Errors
**Error**: `Cannot find module 'three'` or WebGL errors

**Fix**: Reinstall three.js:
```bash
npm install three@^0.159.0 --legacy-peer-deps
```

### Issue: Permission Errors
**Error**: `Operation not permitted`

**Fix**: Run in your terminal (not sandbox):
```bash
chmod -R u+r node_modules
chmod 644 .env.local
```

## Quick Test: Minimal Page

To test if the basic setup works, temporarily replace `app/page.tsx`:

```tsx
export default function Page() {
  return <div style={{ padding: '2rem', color: 'white', background: '#0F0F0F' }}>
    <h1>Portfolio Test</h1>
    <p>If you see this, Next.js is working!</p>
  </div>
}
```

If this works, the issue is with the components.

## What to Share

Please share:
1. **Browser console errors** (screenshot or copy text)
2. **Terminal output** from `npm run dev`
3. **What you see** on the page (blank? error message? partial load?)

This will help me identify the exact issue!
