# Diagnostic Guide

## ✅ Current Status

- ✅ Server is running on port 3000
- ✅ Dependencies installed
- ✅ .env.local created
- ✅ No linter errors
- ✅ All files exist

## 🔍 Common Issues & Fixes

### Issue 1: Blank Page / White Screen

**Check:**
- Open browser console (F12 or Cmd+Option+I)
- Look for red error messages

**Common causes:**
- Import path issues
- Missing component
- Build error

**Fix:**
```bash
# Restart server
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Issue 2: "Module not found" Error

**Check browser console for:**
- `Cannot find module 'ai/react'`
- `Cannot find module '@/src/components/ui/Chatbot'`

**Fix:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue 3: 3D Scene Not Loading

**Check:**
- Browser console for WebGL errors
- GPU/driver issues

**Fix:**
- Try different browser (Chrome, Firefox, Safari)
- Check if WebGL is enabled in browser settings

### Issue 4: Chatbot Not Working

**Check:**
- `.env.local` exists with API key
- Browser console for API errors
- Network tab for failed requests

**Fix:**
```bash
# Verify .env.local
cat .env.local

# Should show:
# GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
```

### Issue 5: Styles Not Loading

**Check:**
- Tailwind CSS compiled
- Browser console for CSS errors

**Fix:**
```bash
# Rebuild
rm -rf .next
npm run dev
```

## 🧪 Quick Tests

### Test 1: Server Response
```bash
curl http://localhost:3000
```
Should return HTML, not error.

### Test 2: Check Port
```bash
lsof -ti:3000
```
Should show a process ID.

### Test 3: Check Build
```bash
npm run build
```
Should complete without errors.

## 📋 What to Check in Browser

1. **Open DevTools (F12)**
   - Console tab: Look for errors
   - Network tab: Check failed requests
   - Elements tab: Check if HTML is rendering

2. **Common Errors:**
   - `404` errors = Missing files
   - `500` errors = Server-side errors
   - `Module not found` = Import issues
   - `WebGL not supported` = 3D scene issue

3. **Check URL:**
   - Should be: `http://localhost:3000`
   - Not: `https://localhost:3000` (no SSL needed)

## 🚀 Quick Fixes

### Restart Everything
```bash
# Kill server
lsof -ti:3000 | xargs kill -9

# Clear cache
rm -rf .next node_modules package-lock.json

# Reinstall
npm install

# Start fresh
npm run dev
```

### Check Specific Component
If one component isn't working, temporarily comment it out:

```tsx
// In HomePage.tsx
// import Chatbot from '@/src/components/ui/Chatbot';
// <Chatbot /> // Comment this out
```

## 📞 What to Share

If you're still having issues, share:
1. Browser console errors (screenshot or copy text)
2. Terminal output (from `npm run dev`)
3. What you see in browser (blank page? error message?)
4. Browser and version (Chrome, Safari, etc.)

## ✅ Expected Behavior

When working correctly, you should see:
- Dark background (#0F0F0F)
- 3D rotating object in hero
- Navigation bar at top
- Project cards below
- Chatbot button in bottom-right

If you see something different, that's the issue to fix!
