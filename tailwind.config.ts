import type { Config } from "tailwindcss"

const config = {
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config