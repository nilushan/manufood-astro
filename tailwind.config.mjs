/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
        secondary: '#16a34a',
        accent: '#fbbf24',
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#f97316",
          "secondary": "#16a34a", 
          "accent": "#fbbf24",
          "neutral": "#374151",
          "base-100": "#ffffff",
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
        dark: {
          "primary": "#f97316",
          "secondary": "#16a34a",
          "accent": "#fbbf24", 
          "neutral": "#1f2937",
          "base-100": "#111827",
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        }
      }
    ]
  }
}
