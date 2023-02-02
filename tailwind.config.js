/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        primary1: "hsl(204,23.8%,95.9%)",
        background1: "#0F1624",
        SoftBlack: "#1E1E1E",
        LogoGreen: "#41c1ba",
        LogoDarkGreen: "#365b6d",
        accent1: "hsl(34.9,98.6%,72.9%)",
        button: "hsl(205.1,100%,36.1%)",
        background2: "hsl(232.7,27.3%,23.7%)",
        card: "#878b92",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "profile-background": "url('./assets/profile-pic.jpg')",
      }),
    },
  },
  plugins: [],
};
