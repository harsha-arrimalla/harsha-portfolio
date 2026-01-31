#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8
echo "Installing animation dependencies..."
npm install @studio-freight/react-lenis framer-motion clsx tailwind-merge --legacy-peer-deps
echo "Done."
