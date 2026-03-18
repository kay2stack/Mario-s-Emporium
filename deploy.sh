#!/bin/bash

echo "🚀 DEPLOYING SUPER MARIO'S EMPORIUM"
echo "======================================"
echo ""

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""

# Create deployment package
echo "📁 Creating deployment package..."
DEPLOY_DIR="deploy-$(date +%Y%m%d-%H%M%S)"
mkdir -p $DEPLOY_DIR

# Copy necessary files
cp -r .next $DEPLOY_DIR/
cp -r public $DEPLOY_DIR/
cp -r app $DEPLOY_DIR/
cp -r components $DEPLOY_DIR/
cp package.json $DEPLOY_DIR/
cp package-lock.json $DEPLOY_DIR/
cp next.config.ts $DEPLOY_DIR/
cp tsconfig.json $DEPLOY_DIR/
cp tailwind.config.ts $DEPLOY_DIR/
cp postcss.config.js $DEPLOY_DIR/
cp README.md $DEPLOY_DIR/

echo "✅ Deployment package created: $DEPLOY_DIR"
echo ""

# Create deployment instructions
cat > $DEPLOY_DIR/DEPLOYMENT.md << 'EOF'
# 🚀 Super Mario's Emporium - Deployment Instructions

## Quick Start
1. Copy all files to your server
2. Install dependencies: `npm install --production`
3. Start the server: `npm start`

## Environment Variables
Create a `.env.local` file with:
```
# Supabase Database (optional)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# Stripe Payments (optional)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
```

## Available Scripts
- `npm start` - Start production server
- `npm run build` - Build for production
- `npm run dev` - Start development server

## Features Deployed
✅ Modern landing page (based on PDF design)
✅ Product listings with filters
✅ Shopping cart functionality
✅ Checkout process (3-step)
✅ Product detail pages
✅ Responsive design
✅ Email notifications signup
✅ Category browsing

## Next Steps
1. Set up Supabase database for products
2. Configure Stripe for payments
3. Add user authentication
4. Set up email notifications
5. Add admin dashboard

## Support
For issues, contact: hello@mariosemporium.com
EOF

echo "📋 Deployment instructions created"
echo ""
echo "🎉 DEPLOYMENT READY!"
echo "====================="
echo "1. Copy the '$DEPLOY_DIR' folder to your server"
echo "2. Follow instructions in $DEPLOY_DIR/DEPLOYMENT.md"
echo "3. Start with: cd $DEPLOY_DIR && npm install && npm start"
echo ""
echo "🌐 Your e-commerce store is ready to launch!"
echo "   Visit: http://your-server:3000"
echo ""