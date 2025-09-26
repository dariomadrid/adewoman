/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Synonym Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Synonym Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Synonym Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        chillax: ['Chillax', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand colors (existing)
        'brand-cream': '#FDF8F3',
        'brand-brown': '#5C3B1E',
        'brand-beige': '#EBDCC4',
        'brand-brown-light': '#7A5E3B',
        
        // Custom semantic colors from CSS variables
        'primary': '#5C3B1E',
        'light': '#FDF8F3',
        'accent': '#EBDCC4',
        'accent-hover': '#7A5E3B',
        'accent-dark': '#C5A880',
        'tertiary': '#A67B5B',
        'tertiary-hover': '#8B6847',
        'dark': '#2D2D2D',
        'gray-light': '#9CA3AF',
        'footer': '#133538',
        'slate-blue': '#404C6A',
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      }
    },
  },
  plugins: [],
}