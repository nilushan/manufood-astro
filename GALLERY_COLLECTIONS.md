# Gallery Collections Feature

## Overview
The gallery has been enhanced to support individual collection pages for each date. Each collection now has its own dedicated page with detailed views and navigation.

## URL Structure

### Main Gallery Page
- **URL**: `/gallery`
- **Purpose**: Overview of all collections
- **Features**: 
  - Grid view of all collections
  - Preview of dishes from each collection
  - Links to individual collection pages

### Individual Collection Pages
- **URL Pattern**: `/gallery/{date-slug}`
- **Examples**:
  - `/gallery/february-15-2025` (February 15, 2025)
  - `/gallery/february-22-2025` (February 22, 2025)

## Dynamic Routing

### How it Works
1. **Static Path Generation**: Using `getStaticPaths()` to generate routes for each collection
2. **Slug Creation**: Date strings are converted to URL-friendly slugs
3. **Dynamic Content**: Each page receives the specific gallery data as props

### Slug Generation Logic
```javascript
gallery.date.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '')
```

Examples:
- "February 15, 2025" → "february-15-2025"
- "February 22, 2025" → "february-22-2025"

## Features of Individual Collection Pages

### 1. **Breadcrumb Navigation**
- Home → Gallery → [Collection Date]
- Easy navigation back to main sections

### 2. **Collection Header**
- Large, attractive header with collection date
- Descriptive subtitle about the cuisine

### 3. **Detailed Image Grid**
- Larger images (400x300px) for better viewing
- Enhanced card layout with badges
- Hover effects and animations

### 4. **Dish Information**
- Dish name and description
- Category badges (Sri Lankan, Fresh)
- High-quality optimized images

### 5. **Navigation Controls**
- "Back to Gallery" button
- "Order Similar Dishes" CTA
- Collection date indicator

### 6. **Related Collections**
- Shows other available collections
- Quick links to other date collections
- Dish count for each collection

## Technical Implementation

### File Structure
```
src/pages/gallery/
├── [slug].astro          # Dynamic collection pages
└── index.astro           # Main gallery page (moved from /gallery.astro)
```

### Image Optimization
- WebP format conversion
- Responsive sizing
- Lazy loading for performance
- Different sizes for different contexts

### DaisyUI Integration
- Using `card`, `btn`, `badge` components
- Consistent theming with site design
- Responsive utilities

## Content Management

### Adding New Collections
1. Add new gallery object to `gallery.json`
2. Import new images to `images.ts`
3. Pages are automatically generated on build

### Example Gallery Data Structure
```json
{
  "date": "March 01, 2025",
  "dishes": [
    {
      "name": "Dish Name",
      "description": "Description of the dish",
      "image": "01032025/dish-image"
    }
  ]
}
```

## Benefits

### User Experience
- Better organization of content
- Detailed view of each collection
- Easy navigation between collections
- Mobile-responsive design

### SEO
- Individual pages for each collection
- Unique URLs for better indexing
- Rich content for each collection

### Performance
- Lazy loading of images
- Optimized image formats
- Static page generation

## Navigation Flow

1. **Homepage** → Gallery section → "View Full Collection"
2. **Gallery Page** → Individual collection → "View Full Collection"
3. **Collection Page** → "Back to Gallery" or "Order Similar Dishes"

This structure provides a comprehensive gallery experience while maintaining easy navigation and content management.
