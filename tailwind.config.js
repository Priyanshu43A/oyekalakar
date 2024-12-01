/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgprimary: '#ffffff',
        heading: "#EF7B45",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

