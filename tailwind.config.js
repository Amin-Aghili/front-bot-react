/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["homa"],
    },
    extend: {
      fontFamily: {
        homa: ["homa"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//         // You can also define other font families here if needed
//       },
//     },
//   },
//   // Make sure to include any necessary paths for PurgeCSS if you're using it
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
// };
