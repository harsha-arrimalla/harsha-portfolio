# Quick Start Guide

## Your Node.js is installed via NVM!

Node.js is installed at: `~/.nvm/versions/node/v18.20.8/bin/node`

## Option 1: Use the Start Script (Easiest)

Run this in your terminal:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor
./start.sh
```

This script will:
1. Load NVM
2. Use the correct Node.js version
3. Install dependencies if needed
4. Start the dev server

## Option 2: Manual Setup

### Step 1: Load NVM in your terminal

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Or add this to your `~/.zshrc` to make it permanent:

```bash
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
```

### Step 2: Use Node.js

```bash
nvm use 18.20.8
# or
nvm use default
```

### Step 3: Install Dependencies

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor
npm install
```

### Step 4: Start Server

```bash
npm run dev
```

## Option 3: Use Full Path (Quick Test)

If you just want to test quickly:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor
~/.nvm/versions/node/v18.20.8/bin/npm install
~/.nvm/versions/node/v18.20.8/bin/npm run dev
```

## After Server Starts

You should see:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Troubleshooting

If you still get "connection refused":
1. Make sure the server is actually running (check terminal output)
2. Wait a few seconds after starting (Next.js needs to compile)
3. Check if port 3000 is blocked: `lsof -ti:3000`
4. Try a different port: `PORT=3001 npm run dev`
