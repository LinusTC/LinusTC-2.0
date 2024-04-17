/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Slab", "Serif"],
      },
      colors: {
        colorE8E8E8: "#E8E8E8",
      },
    },
  },
  plugins: [],
}
