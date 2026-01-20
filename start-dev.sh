#!/bin/bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

echo "🚀 Setting up portfolio..."

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
  echo "📝 Creating .env.local..."
  cat > .env.local << 'ENVEOF'
GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
ENVEOF
  echo "✅ .env.local created"
else
  echo "✅ .env.local already exists"
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies (this may take a minute)..."
  npm install
  echo "✅ Dependencies installed"
else
  echo "✅ Dependencies already installed"
fi

# Start dev server
echo ""
echo "🎨 Starting development server on http://localhost:3000"
echo "   Press Ctrl+C to stop"
echo ""
npm run dev
