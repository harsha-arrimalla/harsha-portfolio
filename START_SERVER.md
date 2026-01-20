# Start Development Server

## Quick Start

Run this command in your terminal:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor
./start-dev.sh
```

This script will:
1. ✅ Load NVM and use Node.js 18.20.8
2. ✅ Create `.env.local` with your Gemini API key
3. ✅ Install dependencies (if needed)
4. ✅ Start the dev server on port 3000

## Manual Steps

If the script doesn't work, run these commands:

```bash
# 1. Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# 2. Create .env.local
cat > .env.local << 'EOF'
GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
EOF

# 3. Install dependencies
npm install

# 4. Start server
npm run dev
```

## Expected Output

You should see:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in Xs
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Then start again
npm run dev
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Module Not Found Errors
Make sure all dependencies are installed:
```bash
npm install
```

## What You'll See

Once running, your portfolio will have:
- 🎨 3D hero scene with cursor interaction
- 📊 Project cards with metrics
- 👤 About section with availability
- ✉️ Contact form
- 🤖 AI chatbot (bottom-right corner)

The chatbot will work once `.env.local` is created with your API key!
