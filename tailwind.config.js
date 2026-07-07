module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#020617",
          950: "#010314"
        },
        gold: {
          400: "#facc6b",
          500: "#eab308"
        }
      }
    }
  },
  plugins: [require("tailwindcss-rtl")]
};