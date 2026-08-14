/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./partials/**/*.html",
    "./src/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette pulled from the AC Paint Center logo
        brand: {
          red: "#E31E24",      // primary red (roof/A + wordmark)
          "red-dark": "#B3151A",
          black: "#111111",    // roof/C black
          white: "#FFFFFF",
          gray: "#F4F4F4"      // neutral background between sections
        }
      },
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"]
      }
    },
  },
  plugins: [],
}
