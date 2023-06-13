/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#991B1B",
        secondaryColor: "#2E2E2E",
        thinColor: "#A098AE",
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      }
    },



  },
  plugins: [],
}