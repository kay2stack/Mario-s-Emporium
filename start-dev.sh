#!/bin/bash

echo "🚀 Starting Super Mario's Emporium Development Server..."
echo "📁 Project: $(pwd)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --no-audit
fi

echo "🔧 Building project..."
npm run build

echo "🌐 Starting development server..."
echo ""
echo "✅ Open your browser and visit:"
echo "   http://localhost:3000"
echo ""
echo "📱 Mobile preview:"
echo "   http://localhost:3000?mobile=1"
echo ""
echo "🛑 Press Ctrl+C to stop the server"
echo ""

npm run dev