/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "400px",
      md: "500px",
      lg: "600px",
      xl: "700px",
      "2xl": "800px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#61DBFB",
        },
      },
    },
  },
  plugins: [],
};
