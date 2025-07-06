# Image Management System

## Overview

The MaNu Foods website uses Astro's built-in image optimization with a custom image management system for easy content management and CMS integration.

## Image Organization

Images are stored in `src/images/` and organized by date folders:

```
src/images/
├── hero-food.jpeg          # Main hero image
├── 15022025/              # February 15, 2025 gallery
│   ├── chicken.jpg
│   ├── fish.jpg
│   ├── prawns.jpg
│   └── brinjol.jpg
├── 22022025/              # February 22, 2025 gallery
│   ├── pork_deviled.jpg
│   ├── friedfish_deviled.jpg
│   ├── beef_curry.jpg
│   └── okra_tempura.jpg
└── weekly-menu-*.jpg      # Weekly menu images
```

## Image System Components

### 1. Image Index (`src/lib/images.ts`)
Centralized image imports and mapping system:

```typescript
export const images = {
  'hero-food': heroFood,
  '15022025/chicken': chicken,
  '22022025/pork_deviled': porkDeviled,
  // ... more images
};

export const getImage = (imagePath: string) => {
  const key = imagePath.replace('@images/', '').replace(/\.(jpg|jpeg|png|webp)$/, '');
  return images[key];
};
```

### 2. Content References
In content files (JSON), images are referenced by key:

```json
{
  "name": "Chicken Devilled",
  "image": "15022025/chicken"
}
```

### 3. Astro Components
Use the centralized image system:

```astro
---
import { Image } from 'astro:assets';
import { images } from '../lib/images';
---

<Image 
  src={images[dish.image]} 
  alt={dish.name}
  width={300}
  height={200}
  format="webp"
  quality={85}
  loading="lazy"
/>
```

## Image Optimization Features

### Automatic Format Conversion
- Images are automatically converted to WebP format
- Fallback to original format for unsupported browsers
- Quality optimization (85% default)

### Responsive Images
- Multiple sizes generated automatically
- Proper `srcset` attributes
- Lazy loading by default

### Performance Benefits
- Images are processed at build time
- Optimized file sizes
- Modern format support
- Proper caching headers

## Usage Examples

### In Astro Components
```astro
---
import { Image } from 'astro:assets';
import { images } from '../lib/images';
---

<Image 
  src={images['hero-food']}
  alt="Delicious Sri Lankan food"
  width={800}
  height={600}
  format="webp"
  quality={90}
  loading="eager"
/>
```

### In React Components
```jsx
import DynamicImage from './DynamicImage';

<DynamicImage 
  src="22022025/pork_deviled"
  alt="Pork Deviled"
  width={300}
  height={200}
  loading="lazy"
/>
```

### In Content Files
```json
{
  "dishes": [
    {
      "name": "Chicken Devilled",
      "image": "15022025/chicken"
    }
  ]
}
```

## Adding New Images

1. **Add physical image file**:
   ```
   src/images/DDMMYYYY/image-name.jpg
   ```

2. **Import in `src/lib/images.ts`**:
   ```typescript
   import newImage from '@images/DDMMYYYY/image-name.jpg';
   
   export const images = {
     // ... existing images
     'DDMMYYYY/image-name': newImage,
   };
   ```

3. **Reference in content**:
   ```json
   {
     "image": "DDMMYYYY/image-name"
   }
   ```

## CMS Integration

The image system is designed for easy CMS integration:

### Image References
- Content files use simple string keys
- No direct file paths in content
- Easy to map to CMS image fields

### Dynamic Loading
- Images can be loaded dynamically
- Supports both static and runtime image resolution
- Compatible with headless CMS systems like Sanity, Contentful, or Strapi

## Troubleshooting

### Common Issues
1. **Image not loading**: Check that the image is imported in `images.ts`
2. **Build errors**: Ensure image files exist and paths are correct
3. **Performance**: Use appropriate image sizes and formats

### Best Practices
- Use WebP format for modern browsers
- Optimize images before adding to project
- Use descriptive alt text for accessibility
- Implement lazy loading for better performance
