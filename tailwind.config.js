/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        25: "6rem",
      },
      maxWidth: {
        48: "12rem",
      },
    },
  },
  plugins: [],
};
