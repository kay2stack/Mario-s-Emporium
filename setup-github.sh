#!/bin/bash

echo "🚀 Setting up Super Mario's Emporium for GitHub & Vercel"
echo "========================================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git branch -m main
fi

echo "✅ Git repository ready"
echo ""

echo "📁 Files to commit:"
git status --short
echo ""

echo "🔧 Next steps:"
echo "1. Create a new repository on GitHub:"
echo "   - Go to https://github.com/new"
echo "   - Name: 'super-marios-emporium'"
echo "   - Keep it public or private"
echo "   - DO NOT initialize with README"
echo ""
echo "2. Connect to GitHub:"
echo "   Copy these commands:"
echo "   ---------------------------------"
echo "   git remote add origin https://github.com/YOUR_USERNAME/super-marios-emporium.git"
echo "   git add ."
echo "   git commit -m '🚀 Super Mario\\'s Emporium - Complete e-commerce platform'"
echo "   git push -u origin main"
echo "   ---------------------------------"
echo ""
echo "3. Deploy to Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Import your GitHub repository"
echo "   - Click 'Deploy'"
echo "   - Your site will be live in 2 minutes!"
echo ""
echo "🌐 Your live URL will be:"
echo "   https://super-marios-emporium.vercel.app"
echo ""
echo "🎮 Game On! Your e-commerce store is ready to deploy!"