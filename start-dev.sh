#!/bin/bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

echo "🚀 Setting up portfolio..."

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
  echo "⚠️  .env.local not found!"
  echo "📝 Creating template .env.local..."
  cat > .env.local << 'ENVEOF'
# Add your Google Gemini API key here
# GOOGLE_GEMINI_API_KEY=your_api_key_here
ENVEOF
  echo "❗ Please add your GOOGLE_GEMINI_API_KEY to .env.local before running."
  exit 1
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
