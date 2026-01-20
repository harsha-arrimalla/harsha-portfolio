#!/bin/bash

echo "📦 Installing zod dependency..."
echo ""

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Kill server if running
lsof -ti:3000 | xargs kill -9 2>/dev/null
echo "🛑 Stopped server"

# Install zod
echo "📥 Installing zod..."
npm install zod --legacy-peer-deps

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ zod installed successfully!"
  echo ""
  echo "🚀 Starting development server..."
  npm run dev
else
  echo ""
  echo "❌ Installation failed"
  echo "Try running manually: npm install zod --legacy-peer-deps"
fi
