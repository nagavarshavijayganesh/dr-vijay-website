/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Clear medium blue
          dark: '#1D4ED8',
          light: '#DBEAFE'
        },
        secondary: {
          DEFAULT: '#102A56', // Navy
          light: '#29466F'
        },
        background: {
          DEFAULT: '#F1F7FF', // Pale blue
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
