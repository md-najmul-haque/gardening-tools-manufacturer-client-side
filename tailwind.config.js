module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        gardeningtheme: {
          primary: "#76a246",
          secondary: "#84CC16",
          accent: "#76a246",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')],
}
