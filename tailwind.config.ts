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
        color3E3E40: "#3E3E40",
        color252526: "#252526",
        color2D2D30:"#2D2D30",
      },
      width: {
        '48%': "48%",
      }
    },
  },
  plugins: [],
}
