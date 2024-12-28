/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        8: "8px",
        16: "16px",
        24: "24px",
        36: "36px",
        44: "44px",
        234: "234px",
      },
      colors: {
        primary: "#6750A4",
        primaryLight: "#EADDFF",
        primaryDefault: "#1D2331",

        gray: "#79747E",
        grayLight: "#e9e8e9",

        pinkLight: "#FFFBFE",

        secondary: "#F3F4F4",
        secondaryDark: "#4A4458",
        secondaryLight: "#625B71",

        surface: "#FFFBFE",
        surfaceLight: "#1C1B1F",
        surfaceGradient: {
          base: "#FFFBFE",
          overlay: "rgba(103, 80, 164, 0.05)",
        },
      },
      borderRadius: {
        8: "8px",
        24: "24px",
        50: "50%",
      },
      fontSize: {
        14: "14px",
        20: "20px",
        32: "32px",
      },
      lineHeight: {
        20: "20px",
        22: "22px",
        40: "40px",
      },
      letterSpacing: {
        "01": "0.10000000149011612px",
      },
      fontWeight: {
        500: 500,
        600: 600,
        700: 700,
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      screens: {
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
