module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },
    extend: {
      fontFamily: {
        headline: ["EB_Garamond"],
      },
      colors: {
        mainColor: "#212f49",
      },
      // fontFamily: {
      //   headline: ["fars"],
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
