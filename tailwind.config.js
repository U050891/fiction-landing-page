/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'fiction-red': '#ff0000',
        'fiction-orange': '#ff8000',
        'fiction-yellow': '#ffff00',
        'fiction-green': '#00ff00',
        'fiction-blue': '#0000ff',
        'slate': {
          200: '#e2e8f0',
          300: '#cbd5e1',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b'
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'Times', 'Times New Roman', 'serif']
      },
      borderRadius: {
        'fiction': '50%'
      },
      boxShadow: {
        'fiction': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}

