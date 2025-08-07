/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5EA3CA',
        'primary-light': '#B6CDDB',
        'primary-dark': '#4A829F',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float-1': 'float1 20s ease-in-out infinite',
        'float-2': 'float2 25s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(-30px, 30px) rotate(-120deg)' },
          '66%': { transform: 'translate(20px, -20px) rotate(-240deg)' },
        },
        heartbeat: {
          '0%, 50%, 100%': { transform: 'scale(1)' },
          '25%, 75%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        counter: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}