/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'fiction': {
          'blue': {
            DEFAULT: 'rgba(37, 99, 235, 0.2)',
            600: 'rgba(37, 99, 235, 0.2)',
            700: 'rgba(29, 78, 216, 0.3)',
            800: 'rgba(10, 125, 232, 0.91)',
          },
          'white': {
            DEFAULT: 'rgba(255, 255, 255, 1)',
            80: 'rgba(255, 255, 255, 0.8)',
            20: 'rgba(255, 255, 255, 0.2)',
            10: 'rgba(255, 255, 255, 0.1)',
          },
          'black': 'rgba(0, 0, 0, 0.5)'
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'Times', 'Times New Roman', 'serif']
      },
      borderRadius: {
        'fiction': '9999px'
      },
      boxShadow: {
        'fiction': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.1)'
      },
      backdropBlur: {
        'fiction': '12px',
        'card': '16px'
      }
    },
  },
  plugins: [],
}

