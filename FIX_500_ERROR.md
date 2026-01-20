# Fix: 500 Internal Server Error

## Problem
The server is returning 500 errors because of file permission issues. Next.js cannot read files in `node_modules` due to sandbox restrictions.

## Solution: Run in Your Terminal

The sandbox has permission restrictions. You need to run the server in your own terminal where you have full file system access.

### Step 1: Kill Any Running Servers
```bash
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

### Step 2: Fix Permissions
```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# Fix node_modules permissions
chmod -R u+r node_modules

# Fix .env.local permissions
chmod 644 .env.local
```

### Step 3: Clear Cache and Restart
```bash
# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Clear Next.js cache
rm -rf .next

# Start server
npm run dev
```

## Alternative: Complete Clean Install

If permissions are still an issue:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# Kill servers
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Complete clean install
rm -rf node_modules package-lock.json .next
npm install --legacy-peer-deps

# Create .env.local with proper permissions
cat > .env.local << 'EOF'
GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
EOF
chmod 644 .env.local

# Start server
npm run dev
```

## Why This Happens

The sandbox environment has restricted file permissions that prevent Next.js from reading its own files in `node_modules`. Running in your terminal gives full permissions.

## Expected Result

After running in your terminal, you should see:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in Xs
```

Then the site should load without 500 errors!
