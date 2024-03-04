/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
    lavender: {
      100: "#fbfafe",
      200: "#f8f5fd",
      300: "#f4effb",
      400: "#f1eafa",
      500: "#ede5f9",
      600: "#beb7c7",
      700: "#8e8995",
      800: "#5f5c64",
      900: "#2f2e32"
    },
    skyblue: {
      100: "#f7faff",
      200: "#eff5ff",
      300: "#e7effe",
      400: "#dfeafe",
      500: "#d7e5fe",
      600: "#acb7cb",
      700: "#818998",
      800: "#565c66",
      900: "#2b2e33"
    },
  }
};