/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1024px",
        // Add custom breakpoints
      },
      cursor: {},
    },
  },
  plugins: [],
  variants: {},
};
