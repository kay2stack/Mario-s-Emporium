# 🎮 Mario's Emporium

A modern e-commerce platform for gaming gear, retro tech, and one-off bargains. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Landing Page** - Based on the original PDF design
- **Responsive Design** - Mobile-first approach
- **Stock Drop Notifications** - Email alerts for new arrivals
- **Category Browsing** - Gaming, Retro Tech, Electronics, Workwear
- **Live Stock Tracker** - Real-time inventory updates
- **Modern UI Components** - With animations and hover effects

## 📁 Project Structure

```
marios-emporium/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   ├── components/        # React components
│   ├── lib/              # Utility functions
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/            # Shared components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── HeroSection.tsx   # Main hero section
│   ├── StockHighlights.tsx # Stock highlights
│   ├── CategoriesGrid.tsx # Category grid
│   └── NewsletterSection.tsx # Email signup
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

### 2. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### 3. Build for Production
```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary**: `#FF6B35` (Mario red/orange)
- **Secondary**: `#2D3047` (Dark blue)
- **Accent**: `#00B4D8` (Cyan blue)
- **Background**: `#F8F9FA`

### Fonts
- **Headings**: Bebas Neue
- **Body**: Barlow
- **Condensed**: Barlow Condensed

### Components
- Reusable button styles with hover effects
- Card components with gradients
- Badge system for stock status
- Responsive grid layouts

## 📱 Pages

1. **Homepage** (`/`) - Landing page with hero, categories, and newsletter
2. **Shop** (`/shop`) - Product listings (to be implemented)
3. **Category Pages** (`/shop/[category]`) - Filtered products
4. **Product Pages** (`/product/[id]`) - Product details
5. **Cart** (`/cart`) - Shopping cart
6. **Checkout** (`/checkout`) - Payment process

## 🔧 Future Features

- [ ] Product database with Supabase
- [ ] Shopping cart functionality
- [ ] Stripe payment integration
- [ ] User accounts
- [ ] Order history
- [ ] Admin dashboard
- [ ] Stock management
- [ ] Email notifications
- [ ] Mobile app (React Native)

## 📄 License

MIT License - see LICENSE file for details.

## 👤 Author

Built for Mario's Emporium - The stock is always changing!

---

*Last updated: March 2026*