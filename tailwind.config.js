/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // new
        xtb: { min: "991px", max: "1199px" },
        tb: { min: "768px", max: "990px" },
        mb: { min: "481px", max: "768px" },
        xs: { min: "320px", max: "480px" },
      },
    },
  },
  plugins: [],
};
