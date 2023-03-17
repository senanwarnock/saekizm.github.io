/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 5s ease-in-out',
        'slide-in': 'slideIn 2s ease-in-out',
        'slide-in-1': 'slideIn 5s ease-in-out 1s',
        'slide-in-right': 'slideInRight 2s ease-in-out',
      },
      animationDelay: {
        '1s': '100ms',
        '2s': '200ms',
        '3s': '300ms',
        '4s': '400ms',
        '5s': '500ms',
        '6s': '600ms',
        '7s': '700ms',
        '8s': '800ms',
        '9s': '900ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(-500%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(500%)'},
          '100%': { transform: 'translateX(0%)'},
        }
      },
      fontFamily: {
        courier: ["Courier New", "Courier", "monospace"]
    },
  },
  plugins: [],
}
}
