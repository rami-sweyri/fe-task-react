module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "fe-gray-100": "#777777",
        "fe-gray-200": "#222222",
        "fe-gray-300": "#999999",
        "fe-gray-400": "#F7F9FB",
        "fe-brick-100": "#FE7F66",
        "fe-brick-105": "#fe7f660d",
        "fe-brick-200": "#FEEFEC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
