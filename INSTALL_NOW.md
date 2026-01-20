# ⚠️ Install Required Packages

The error `Module not found: Can't resolve 'ai/react'` is happening because the packages haven't been installed yet.

## Quick Fix

Run this command in your terminal:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Install packages
npm install
```

**OR** use the install script:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor
./install-and-run.sh
```

This will:
1. ✅ Load NVM
2. ✅ Install all dependencies (including `ai` package)
3. ✅ Start the dev server

## What Was Added

I've already added these packages to `package.json`:
- `ai` - Vercel AI SDK
- `@ai-sdk/openai` - OpenAI integration  
- `lucide-react` - Icons for the chatbot

You just need to run `npm install` to download them.

## After Installation

Once `npm install` completes, the error will be resolved and your dev server will work!

The chatbot component is ready at `src/components/ui/Chatbot.tsx` - you can add it to your page when ready.
