# Fix: Module not found 'zod/v3'

## Problem
The AI SDK requires `zod` but it's not installed, causing the build to fail.

## Solution

Run this in your terminal:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Install zod
npm install zod --legacy-peer-deps

# Restart server
npm run dev
```

## What Happened

The `ai` package and `@ai-sdk/google` depend on `zod` for schema validation, but it wasn't explicitly listed in `package.json`. I've added it, but you need to install it.

## After Installation

The build error should be resolved and your portfolio will work with the AI chatbot!
