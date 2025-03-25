/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1B2E',
        secondary: '#8B5CF6',
        accent: '#4F46E5',
        purple: {
          light: '#C4B5FD',
          DEFAULT: '#8B5CF6',
          dark: '#6D28D9'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: []
}