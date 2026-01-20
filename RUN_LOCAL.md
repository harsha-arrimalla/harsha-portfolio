# Run Portfolio Locally

## Quick Start

Run this command in your terminal:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor
./run-local.sh
```

This script will:
1. ✅ Load NVM and use Node.js 18.20.8
2. ✅ Create `.env.local` with your Gemini API key
3. ✅ Install dependencies (if needed)
4. ✅ Start the development server

## Manual Steps

If the script doesn't work, run these commands manually:

### 1. Load NVM
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8
```

### 2. Create .env.local
```bash
cat > .env.local << 'EOF'
GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
EOF
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Server
```bash
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

# Or use different port
PORT=3001 npm run dev
```

### Permission Errors
If you get permission errors, try:
```bash
sudo chown -R $(whoami) ~/.npm
```

### Module Not Found
If you see module errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

## What You'll See

Once running, your portfolio will have:
- 🎨 3D hero scene with cursor interaction
- 📊 Project cards with metrics
- 👤 About section with availability
- ✉️ Contact form
- 🤖 AI chatbot (bottom-right corner)

The chatbot will be ready to answer questions about your projects!
