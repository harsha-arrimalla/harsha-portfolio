# Quick Setup - Gemini Chatbot

## ✅ What I've Done

1. ✅ Updated to use Google Gemini API
2. ✅ Added chatbot to your homepage
3. ✅ Configured with your portfolio system prompt
4. ✅ Updated package.json with `@ai-sdk/google`

## 🚀 Next Steps

### 1. Create `.env.local` file

In your project root, create `.env.local`:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor
echo "GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM" > .env.local
```

Or manually create the file with this content:
```
GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
```

### 2. Install Packages

```bash
# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Install dependencies
npm install
```

### 3. Start Server

```bash
npm run dev
```

## ✨ Result

Your portfolio will have:
- ✅ Working chatbot in bottom-right corner
- ✅ Answers questions about your projects
- ✅ Uses Gemini 1.5 Flash (fast & efficient)
- ✅ Follows your portfolio bot personality

The chatbot is already added to your homepage and will appear once the API key is configured!
