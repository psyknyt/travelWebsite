/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF8911",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        oswald: ['"Oswald", "sans-serif"'],
        fredoka: ['"Fredoka", "sans-serif"'],
        montez: ['"Montez", "cursive"'],
        inter: ['"Inter", "sans-serif"'],
      },
    },
  },
  plugins: [],
};
