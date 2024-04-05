/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF7F1",
        secondary: "#FFE4C9",
        "color-1": "#E78895",
        "color-2": "#BED1CF",
      },
    },
    container: {
      padding: "2rem",

      center: true,
      screens: {
        lg: "1124px",
      },
    },
  },
  plugins: [],
};
