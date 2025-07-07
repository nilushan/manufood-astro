# 🔄 DaisyUI 5 Migration Plan - MaNu Foods

## 🚨 **CRITICAL ISSUES IDENTIFIED**

The codebase has major inconsistencies with DaisyUI 5 requirements that need immediate attention.

---

## ❌ **Major Problems Found**

### **1. CRITICAL: Wrong Tailwind CSS Version**
- **Current**: Tailwind CSS v3 configuration style
- **Required**: Tailwind CSS v4 with CSS-only configuration
- **Impact**: DaisyUI 5 won't work properly

### **2. CRITICAL: Deprecated Configuration Method**
- **Current**: Using `tailwind.config.mjs` file
- **Required**: CSS-only configuration in DaisyUI 5

### **3. Component Structure Issues**
- **Current**: Mixed custom CSS and DaisyUI classes
- **Required**: Proper DaisyUI component structure

### **4. Color System Violations**
- **Current**: Hard-coded hex colors everywhere
- **Required**: DaisyUI semantic color system

### **5. Missing DaisyUI Components**
- **Current**: Custom header, navigation, forms
- **Required**: DaisyUI navbar, breadcrumbs, form components

---

## 🔧 **Immediate Fixes Required**

### **1. Fix Configuration (CRITICAL)**

**Current `tailwind.config.mjs`**:
```javascript
// ❌ This is Tailwind CSS v3 style - WRONG for DaisyUI 5
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [require('daisyui')],
  daisyui: { themes: [...] }
}
```

**✅ Required CSS-only configuration**:
```css
/* src/styles/global.css */
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
```

### **2. Fix Header Component**

**Current Header (Wrong)**:
```astro
<header class="header-fixed">
  <div class="header-container">
    <div class="header-content">
      <!-- Custom CSS classes -->
```

**✅ Correct DaisyUI Navbar**:
```astro
<div class="navbar bg-primary text-primary-content fixed top-0 z-50">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl">🍛 MaNu Foods</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">Home</a></li>
      <li><a href="/gallery">Gallery</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
      <!-- Theme toggle icon -->
    </button>
  </div>
</div>
```

### **3. Fix Card Components**

**Current Cards (Inconsistent)**:
```astro
<div class="dish-card card bg-base-100 shadow-lg">
  <figure class="dish-image">
    <img class="dish-img" />
  </figure>
  <div class="card-body p-4">
    <h4 class="card-title text-lg">Title</h4>
```

**✅ Proper DaisyUI Cards**:
```astro
<div class="card bg-base-100 shadow-xl">
  <figure>
    <img src="..." alt="..." />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Dish Name</h2>
    <p>Description text here</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Sri Lankan</div>
    </div>
  </div>
</div>
```

### **4. Fix Color Usage**

**Current (Wrong - Hard-coded colors)**:
```css
background-color: #f97316;
color: #374151;
background: linear-gradient(135deg, #f97316, #fb923c);
```

**✅ Correct (DaisyUI semantic colors)**:
```css
/* Use DaisyUI classes instead */
.bg-primary
.text-base-content
.bg-gradient-to-br.from-primary.to-primary-focus
```

### **5. Fix Button Inconsistencies**

**Current (Mixed approaches)**:
```astro
<button class="theme-toggle">Theme</button>
<button class="order-btn">Order</button>
<a class="view-gallery-btn">View</a>
```

**✅ Consistent DaisyUI Buttons**:
```astro
<button class="btn btn-ghost btn-circle">Theme</button>
<button class="btn btn-primary">Order</button>
<a class="btn btn-outline btn-primary">View</a>
```

---

## 📋 **Step-by-Step Migration Plan**

### **Phase 1: Critical Infrastructure (Day 1)**

1. **Update Package Dependencies**:
```bash
npm uninstall tailwindcss @tailwindcss/vite
npm install tailwindcss@4 @tailwindcss/vite@4
npm install daisyui@latest
```

2. **Delete `tailwind.config.mjs`**:
```bash
rm tailwind.config.mjs
```

3. **Update `src/styles/global.css`**:
```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
  logs: true;
}

/* Minimal custom CSS only */
```

4. **Update `astro.config.mjs`**:
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), mdx()]
});
```

### **Phase 2: Component Migration (Day 2-3)**

1. **Replace Header Component**:
   - Use DaisyUI `navbar` component
   - Replace custom CSS with DaisyUI classes
   - Implement proper mobile menu with `drawer`

2. **Fix Card Components**:
   - Remove custom `.dish-card` classes
   - Use proper `card`, `card-body`, `card-title` structure
   - Implement `card-actions` for buttons

3. **Update Button System**:
   - Replace all custom button classes
   - Use DaisyUI button variants consistently
   - Fix sizing with `btn-sm`, `btn-md`, `btn-lg`

### **Phase 3: Layout & Styling (Day 4-5)**

1. **Remove Custom Grid CSS**:
   - Replace with Tailwind grid utilities
   - Use responsive prefixes `md:`, `lg:`

2. **Fix Color System**:
   - Replace all hex colors with DaisyUI semantic colors
   - Remove custom CSS color definitions
   - Use `bg-primary`, `text-base-content`, etc.

3. **Clean Up CSS File**:
   - Remove 80% of custom CSS
   - Keep only necessary overrides
   - Use DaisyUI modifiers instead

### **Phase 4: Advanced Components (Day 6)**

1. **Add Missing DaisyUI Components**:
   - Implement proper `breadcrumbs`
   - Add `divider` components
   - Use `badge` components consistently

2. **Theme System**:
   - Remove custom dark mode CSS
   - Let DaisyUI handle theme switching
   - Test theme consistency

---

## 🎯 **Expected Benefits**

### **Performance Improvements**:
- **Bundle Size**: Reduce CSS by ~40%
- **Load Time**: Faster with optimized DaisyUI
- **Maintainability**: Much easier to maintain

### **Development Experience**:
- **Consistency**: Unified component system
- **Theming**: Automatic dark/light mode
- **Accessibility**: Built-in a11y features

### **Code Quality**:
- **Less Custom CSS**: 80% reduction
- **Better Structure**: Semantic component system
- **Future-Proof**: Following latest standards

---

## ⚠️ **Breaking Changes Expected**

1. **Visual Changes**: Some components may look slightly different
2. **CSS Dependencies**: Custom styles may break
3. **Theme Switching**: Current theme toggle needs updates
4. **Component Props**: Some component APIs may change

---

## 🧪 **Testing Strategy**

1. **Visual Regression Testing**: Compare before/after screenshots
2. **Responsive Testing**: Check all breakpoints
3. **Theme Testing**: Verify light/dark mode switching
4. **Accessibility Testing**: Ensure a11y standards

---

## 📊 **Risk Assessment**

- **High Risk**: Configuration changes (Phase 1)
- **Medium Risk**: Component migration (Phase 2-3)
- **Low Risk**: Cleanup and optimization (Phase 4)

---

## 🔄 **Rollback Plan**

If issues arise:
1. Keep current code in separate branch
2. Document all changes made
3. Have package.json backup
4. Test migration in development first

---

## 📝 **Action Items**

### **Immediate (This Week)**:
- [ ] Backup current codebase
- [ ] Update to Tailwind CSS v4
- [ ] Fix DaisyUI configuration
- [ ] Test basic functionality

### **Short Term (Next Week)**:
- [ ] Migrate header component
- [ ] Fix card components
- [ ] Update button system
- [ ] Clean up CSS

### **Long Term (Following Week)**:
- [ ] Full theme system implementation
- [ ] Advanced component usage
- [ ] Performance optimization
- [ ] Documentation updates

The current codebase needs significant updates to be compliant with DaisyUI 5 best practices and requirements!
