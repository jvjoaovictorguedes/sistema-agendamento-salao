/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkSalon: "#FE9FDB",
        purpleSalon: "#D39EFF",
      },
    },
  },
  plugins: [],
};
