/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandColor: "#db2b74",
        brandLightColor: "#f9faff",
        brandBg: "#f6f7fd",
      },
      lineHeight: {
        11: "3rem",
        12: "3.5rem",
        13: "4rem",
        14: "4.5rem",
        15: "5rem",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
