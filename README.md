# MaNu Foods - Astro Website

A modern, responsive website for MaNu Foods, featuring authentic Sri Lankan home-cooked meals in Yarrabilba, QLD.

## Features

- 🎨 **Modern Design**: Clean, responsive design with DaisyUI components
- 🏗️ **Astro Framework**: Fast, static site generation with component islands
- 📱 **Mobile-First**: Fully responsive design for all devices
- 🌙 **Dark Mode**: Theme toggle functionality
- 🛒 **Interactive Order Form**: React-based order form with cart functionality
- 📄 **CMS-Ready**: Separated content structure for easy CMS integration
- 🖼️ **Gallery System**: Dynamic gallery for showcasing weekly menus

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Features.astro
│   ├── Gallery.astro
│   ├── PickupDate.astro
│   ├── OrderForm.jsx    # React component for interactivity
│   ├── HowToOrder.astro
│   └── Footer.astro
├── content/             # Content data (CMS-ready)
│   ├── site.json       # Site-wide content
│   ├── menu.json       # Menu and pricing data
│   └── gallery.json    # Gallery content
├── layouts/
│   └── BaseLayout.astro # Base HTML layout
├── pages/
│   ├── index.astro     # Homepage
│   ├── gallery.astro   # Gallery page
│   └── contact.astro   # Contact page
└── styles/
    └── global.css      # Global styles
```

## Content Management

All content is stored in JSON files in the `src/content/` directory:

- **site.json**: Site-wide content including navigation, features, contact info
- **menu.json**: Menu items, pricing, and pickup dates
- **gallery.json**: Food gallery with descriptions and images

This structure makes it easy to integrate with headless CMS systems like Contentful, Sanity, or Strapi.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

- **Primary Color**: Orange (#f97316) - Brand color
- **Secondary Color**: Green (#16a34a) - Call-to-action buttons
- **Accent Color**: Yellow (#fbbf24) - Highlights and accents
- **Typography**: System fonts for optimal performance
- **Components**: DaisyUI for consistent styling

## Key Components

### OrderForm.jsx
Interactive React component that handles:
- Dynamic quantity selection
- Real-time price calculation
- Order text generation
- Clipboard functionality for easy SMS ordering

### Gallery System
Dynamic gallery that displays:
- Weekly menu photos
- Dish descriptions
- Responsive image grids
- Easy content management

### Responsive Design
- Mobile-first approach
- Flexible grid systems
- Optimized images
- Touch-friendly interfaces

## Deployment

The site is optimized for static hosting platforms like:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

All pages are pre-rendered at build time for optimal performance.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Static site generation
- Optimized images
- Minimal JavaScript
- Component islands architecture
- Fast loading times
