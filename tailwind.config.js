/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: ["./src/**/*.{html,js,astro,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        biersibleue: "#023551", // violet indigo
        biersiorange: "#ffb14c", // bleu clair
        biersibelge: "#f0e3da", // Gris très clair
      },
    },
  },
  plugins: [],
};
