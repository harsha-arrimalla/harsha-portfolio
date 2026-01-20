# Final Fix: 500 Internal Server Error

## The Problem

The 500 errors are happening because Next.js **cannot read files from `node_modules`** due to permission restrictions. This is a **file system permission issue**, not a code issue.

## The Solution

You **MUST run this in your own terminal** (not in the sandbox). The sandbox has restricted permissions that prevent Next.js from working.

## Quick Fix (Run in Your Terminal)

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor
./fix-and-run.sh
```

This script will:
1. ✅ Kill any running servers
2. ✅ Fix file permissions
3. ✅ Clear Next.js cache
4. ✅ Start the server

## Manual Steps (If Script Doesn't Work)

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# 1. Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# 2. Kill existing servers
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:3001 | xargs kill -9 2>/dev/null

# 3. Fix permissions (THIS IS CRITICAL)
sudo chmod -R u+r node_modules
chmod 644 .env.local

# 4. Clear cache
rm -rf .next

# 5. Start server
npm run dev
```

## Why This Happens

The sandbox environment restricts file permissions. When Next.js tries to:
- Read files from `node_modules/next/dist/...`
- Compile your pages
- Serve static assets

It gets "Operation not permitted" errors, which cause 500 responses.

## Alternative: Complete Reinstall

If permissions are still an issue:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# Kill servers
lsof -ti:3000 | xargs kill -9 2>/dev/null

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Complete clean install
rm -rf node_modules package-lock.json .next
npm install --legacy-peer-deps

# Create .env.local
cat > .env.local << 'EOF'
GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
EOF

# Start server
npm run dev
```

## Expected Result

After running in your terminal, you should see:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in Xs
```

Then http://localhost:3000 should load **without 500 errors**.

## Important

**You must run this in YOUR terminal**, not in the sandbox. The sandbox cannot fix file permissions properly.

Run `./fix-and-run.sh` in your terminal now!
