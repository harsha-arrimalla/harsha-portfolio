# Gemini API Setup

## ✅ Configuration Complete

I've updated the chatbot to use Google Gemini instead of OpenAI.

## What Changed

1. ✅ Replaced `@ai-sdk/openai` with `@ai-sdk/google` in package.json
2. ✅ Updated API route to use Gemini (`gemini-1.5-flash`)
3. ✅ Integrated your portfolio bot system prompt
4. ✅ Created `.env.example` template

## Setup Steps

### 1. Create `.env.local` file

Create a file named `.env.local` in the project root with:

```bash
GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
```

**Note:** `.env.local` is already in `.gitignore` so your API key won't be committed.

### 2. Install Updated Packages

```bash
# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Install the Google AI SDK
npm install
```

### 3. Restart Dev Server

After creating `.env.local` and installing packages:

```bash
npm run dev
```

## How It Works

The chatbot now:
- Uses Google Gemini 1.5 Flash (fast and efficient)
- Follows your portfolio bot system prompt
- Answers questions about your projects, skills, and experience
- Speaks in first person as you
- Stays focused on your portfolio

## Testing

Once the server is running, you can test the chatbot by:
1. Adding `<Chatbot />` to your `HomePage.tsx`
2. Clicking the chat button in the bottom-right
3. Asking questions like:
   - "Tell me about Aarna"
   - "What's your design process?"
   - "What tools do you use?"

## Security Note

⚠️ **Important:** Never commit your `.env.local` file. It's already in `.gitignore`, but double-check before pushing to GitHub.

If you need to deploy, add the API key as an environment variable in your hosting platform (Vercel, Netlify, etc.).
