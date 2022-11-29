/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      screens: {
        ssm: [{ min: "320px", max: "480px" }],
      }
    },

    colors: {
      "Primary-color": "#000000",
      "Primary-color-light": "#161515",
      "Secundary-color": "#FF4500",
      "Secundary-color-light": "#FF4C00",
      "White-color": "#FAF6EC",
      "Gray-color": "#C6C6C6",
      "Dark-blue": "#091C21",
      "Light-blue": "#143D48",
      "Mcrimson": "#DC143C",
    },

    fontFamily: {
      League: ["League-Gothic"],
    },
  },

  plugins: [],
};