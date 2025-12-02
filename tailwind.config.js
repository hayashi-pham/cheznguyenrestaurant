/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', '"Playfair Display"', 'serif'],
        sans: ['var(--font-sans)', '"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f8faf7',
          100: '#eef4eb',
          200: '#d8e6d3',
          300: '#b6cfb0',
          400: '#8aaf82',
          500: '#5b8c51',
          600: '#3f6c39',
          700: '#2d4f2a',
          800: '#1f371d',
          900: '#162815'
        }
      },
      boxShadow: {
        glow: '0 20px 80px rgba(17, 24, 39, 0.45)',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top left, rgba(91, 140, 81, 0.2), transparent 35%), radial-gradient(circle at bottom right, rgba(34, 41, 47, 0.35), transparent 40%)',
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
