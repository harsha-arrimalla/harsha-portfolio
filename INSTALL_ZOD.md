# How to Install zod

## Quick Method: Use the Script

Run this in your terminal:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor
./install-zod.sh
```

This script will:
1. Load NVM
2. Stop the server
3. Install zod
4. Start the server again

## Manual Method

If the script doesn't work, run these commands manually:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# 1. Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# 2. Stop server (if running)
lsof -ti:3000 | xargs kill -9 2>/dev/null

# 3. Install zod
npm install zod --legacy-peer-deps

# 4. Start server
npm run dev
```

## What is zod?

`zod` is a TypeScript-first schema validation library. The AI SDK (`ai` package) uses it to validate API requests and responses. It's a required dependency for the chatbot to work.

## After Installation

Once `zod` is installed:
- ✅ The build error will be resolved
- ✅ Your portfolio will compile successfully
- ✅ The AI chatbot will work
- ✅ All awards-level features will be functional

## Verify Installation

After running the install, check if it worked:

```bash
# Check if zod is installed
ls node_modules/zod

# Should show the zod directory
```

Then refresh your browser - the error should be gone!
