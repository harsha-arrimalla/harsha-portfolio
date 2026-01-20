# Fix: Connection Refused Error

## Problem
The server isn't running because dependencies aren't installed.

## Solution

Run these commands in your terminal:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# 1. Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# 2. Create .env.local (for chatbot)
cat > .env.local << 'EOF'
GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
EOF

# 3. Install dependencies (THIS IS REQUIRED)
npm install

# 4. Start the server
npm run dev
```

## What to Expect

After `npm install` completes (may take 2-3 minutes), you should see:
```
added XXX packages in XXs
```

Then when you run `npm run dev`, you'll see:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in Xs
```

## Quick One-Liner

Or use the setup script:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor
./start-dev.sh
```

This script does everything automatically.

## Troubleshooting

### If npm install fails:
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### If port 3000 is busy:
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Then start server
npm run dev
```

### If you see module errors:
Make sure you're in the project directory:
```bash
pwd
# Should show: /Users/harsha/Desktop/projects/portfolio/option-cursor
```

## Status Check

After running the commands, check:
- ✅ `node_modules` folder exists
- ✅ `.env.local` file exists
- ✅ Server shows "Ready" message
- ✅ Can access http://localhost:3000
