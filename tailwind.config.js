module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        heroImage:
          "linear-gradient(0deg, rgba(253, 247, 240, 0.58), rgba(253, 247, 240, 0.58)), url(/img/im.jpg)",
      },
      colors: {
        // Configure your color palette here
        transparent: "transparent",
        current: "currentColor",
        "glass": "rgba(255, 255, 255, 0.1)",
        "back-color": "#f6fafd",
        "h1-color": "#031430",
        "btn-color": "#2677d9",
      },

      boxShadow: {
        mysm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        myxl: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    screens: {
      mdm: { max: "787px" },
      // => @media (max-width: 767px) { ... }
      smm: { max: "320px" },
      // => @media (max-width: 320px) { ... }

      xsm: "520px",

      sm: "730px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 768px) { ... }

      lg: "1204px",
      // => @media (min-width: 1204px) { ... }

      xl: "1480px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1636px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
