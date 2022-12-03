/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    paintOrder: {
      fsm: { paintOrder: "fill stroke markers" },
      fms: { paintOrder: "fill markers stroke" },
      sfm: { paintOrder: "stroke fill markers" },
      smf: { paintOrder: "stroke markers fill" },
      mfs: { paintOrder: "markers fill stroke" },
      msf: { paintOrder: "markers stroke fill" },
    },
    extend: {},
    fontFamily: {
      display: ["Panchang", "sans-serif"],
      sans: ["Satoshi", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")],
};

// font-family: 'Panchang', sans-serif;
// font-family: 'Hind', sans-serif;
