/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1a1a1a',
          panel: '#1e1e1e',
          surface: '#252525',
          border: '#333333',
          'border-light': '#404040',
          'border-lighter': '#505050',
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
}

