#!/usr/bin/env node

/**
 * Image Import Generator
 * Automatically generates import statements for images in the images directory
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'src', 'images');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'lib', 'images.ts');

function generateImageImports() {
  const imports = [];
  const imageMap = {};

  function scanDirectory(dir, prefix = '') {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      if (item.name.startsWith('.')) continue; // Skip hidden files
      
      const fullPath = path.join(dir, item.name);
      const relativePath = path.relative(IMAGES_DIR, fullPath);
      
      if (item.isDirectory()) {
        scanDirectory(fullPath, prefix + item.name + '/');
      } else if (item.isFile() && /\.(jpg|jpeg|png|webp|svg)$/i.test(item.name)) {
        const baseName = item.name.replace(/\.[^.]+$/, '');
        const varName = (prefix + baseName)
          .replace(/[^a-zA-Z0-9]/g, '_')
          .replace(/^_+|_+$/g, '')
          .replace(/_+/g, '_');
        
        const importPath = '@images/' + relativePath.replace(/\\/g, '/');
        const mapKey = (prefix + baseName).replace(/\\/g, '/');
        
        imports.push(`import ${varName} from '${importPath}';`);
        imageMap[mapKey] = varName;
      }
    }
  }

  scanDirectory(IMAGES_DIR);

  // Generate the TypeScript file
  const content = `// Auto-generated image imports
${imports.join('\n')}

export const images = {
${Object.entries(imageMap).map(([key, varName]) => `  '${key}': ${varName},`).join('\n')}
};

export const getImage = (imagePath: string) => {
  // Convert @images/path to key format
  const key = imagePath.replace('@images/', '').replace(/\\.[^.]+$/, '');
  return images[key];
};

export type ImageKey = keyof typeof images;
`;

  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(`Generated ${Object.keys(imageMap).length} image imports in ${OUTPUT_FILE}`);
}

if (require.main === module) {
  generateImageImports();
}

module.exports = { generateImageImports };
