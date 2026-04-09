# Scott G. A. Metcalf - Author Portfolio

A premium, production-ready author website for military memoir writer Scott G. A. Metcalf. Built with modern web technologies and designed for an immersive, editorial user experience.

## 🎨 Features

- **Premium Design**: Editorial-inspired layout with carefully tuned typography and spacing
- **Dark/Light Mode**: Automatic system preference detection with smooth transitions
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Subtle, intentional motion using Framer Motion
- **Semantic HTML**: Accessible, clean markup
- **Performance Optimized**: Fast page loads, minimal layout shift
- **Interactive Components**: Expandable book cards, form validation, smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Noto Serif (headings), Inter (body)

## 📋 Pages

- **Home**: Hero section, narrative intro, books showcase, themes, quote, CTAs
- **About**: Author biography, writing philosophy, journey timeline, core values
- **Books**: Complete book catalog with expandable details, reviews, reading order
- **Contact**: Contact form, contact info, newsletter signup

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors

**Light Mode**:
- Sand: `#F5F1EA`
- Deep Brown: `#3D2817`
- Muted Green: `#4A5F4A`
- Charcoal: `#2C2C2C`

**Dark Mode**:
- Background: `#121212`
- Surface: `#1E1E1E`
- Accent (Green): `#6B8E6B`
- Text: `#F5F1EA`

### Typography

- **Headings**: Noto Serif (serif, bold, generous size)
- **Body**: Inter (clean, readable, 16px base)
- **Line Height**: 1.6 for body, 1.1-1.3 for headings
- **Spacing**: Luxurious, generous whitespace

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── globals.css         # Global styles and theme utilities
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About page
│   ├── books/page.tsx      # Books page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Navigation.tsx      # Header navigation with theme toggle
│   ├── Footer.tsx          # Footer with links and social
│   ├── Button.tsx          # Reusable button component
│   └── BookCard.tsx        # Interactive book card
└── lib/
    ├── ThemeContext.tsx    # Theme provider and context
    └── animations.ts       # Framer Motion animation variants
```

## 🌙 Dark Mode

Dark mode automatically detects system preference and can be toggled via the theme button in the navigation. Preferences are saved to localStorage for persistence.

## 📱 Responsive Design

All pages are fully responsive with careful consideration for:
- Touch-friendly interactions on mobile
- Proper typography scaling
- Clean layout reflow
- Optimized form inputs

## 🚀 Deployment

Recommended platforms:
- **Vercel** (optimal for Next.js)
- **Netlify**
- **AWS Amplify**
- **Self-hosted with Node.js runtime**

### Vercel Deployment

```bash
npm install -g vercel
vercel deploy
```

### Environment Variables

None required for basic functionality. Create `.env.local` if adding features like:
- Contact form email service
- Analytics tracking
- Newsletter subscription

## 🎯 Performance

- Optimized images with next/image
- CSS-in-JS with zero runtime overhead
- Semantic HTML for SEO
- Accessibility considerations (ARIA labels, focus states)
- Smooth scroll and animations

## 📝 Content

All content is editable in the respective page components. Books, reviews, timeline, and contact information can be easily modified.

## 🔒 Accessibility

- WCAG 2.1 AA compliance considered
- Semantic HTML structure
- Color contrast meets standards
- Focus states for keyboard navigation
- Form labels properly associated
- Motion respects `prefers-reduced-motion`

## 📄 License

This project is proprietary to Scott G. A. Metcalf.

## 👤 Author

Scott G. A. Metcalf  
Military Memoir Author

---

**Last Updated**: April 2026  
**Status**: Production Ready
