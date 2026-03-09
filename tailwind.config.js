/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#facc15',
        secondary: '#f59e0b',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #facc15, 0 0 10px #facc15' },
          '100%': { boxShadow: '0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #f59e0b' },
        },
      },
    },
  },
  plugins: [],
}
