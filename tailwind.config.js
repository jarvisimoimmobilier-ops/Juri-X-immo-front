/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#223E66",
        customOrange: "#FFA709", // You can replace 'customBlue' with any name you prefer
      },
    },
  },
  plugins: [],
};
