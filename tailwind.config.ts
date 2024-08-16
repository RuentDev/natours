import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize:{
        "100%": "100%",
        "220%": "220%",
      },
      backgroundImage: {
        heroSmall: 'linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url(/img/hero-small.jpg)',
        featuresBg: 'linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url(/img/nat-4.jpg)',
        heroSmallNoImage: 'linear-gradient(to right, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8))',
        bookingBgImage: "linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%, transparent 50%), url(/img/nat-10.jpg)",
        bookingBgImage1: "linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, transparent 50%), url(/img/nat-10.jpg)",

        cardSpanBg1: "linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85))",
        cardSpanBg2: "linear-gradient(to right bottom, rgba(126, 213, 111, 0.85), rgba(40, 180, 133, 0.85))",
        cardSpanBg3: "linear-gradient(to right bottom, rgba(41, 152, 255, 0.85), rgba(86, 67, 250, 0.85))",

        // OVERLAYS
        bgLinearGradientPrimary: "linear-gradient(to right bottom, #7ED56F, #28B485)",
        // hamburgerbtnbg
        hamburgerButtonBg: "radial-gradient(#7ed56f, #28b485)",
        // navigation hover bg
        navigationHoverBg: "linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%)"
      },
      backgroundColor: {
        colorPrimary: "#55c57a",
        colorPrimaryLight: "#7ed56f",
        colorPrimaryDark: "#28b485",
        colorSecondaryLight: "#ffb900",
        colorSecondaryDark: "#ff7730",
        colorTertiaryLight: "#2998ff",
        colorTertiaryDark: "#5643fa",
        colorGreyLight1: "#f7f7f7",
        colorGreyLight2: "#eee",
        colorGreyDark: "#777",
        colorGreyDark1: "#999",
        colorGreyDark2: "#333",
        colorWhite: "#fff",
        colorBlack: "#000",


      },
      borderColor: {
        colorPrimary: "#55c57a",
        colorPrimaryLight: "#7ed56f",
        colorPrimaryDark: "#28b485",
        colorSecondaryLight: "#ffb900",
        colorSecondaryDark: "#ff7730",
        colorTertiaryLight: "#2998ff",
        colorTertiaryDark: "#5643fa",
        colorGreyLight1: "#f7f7f7",
        colorGreyLight2: "#eee",
        colorGreyDark: "#777",
        colorGreyDark1: "#999",
        colorGreyDark2: "#333",
        colorWhite: "#fff",
        colorBlack: "#000"
      },
      textColor: {
        colorPrimary: "#55c57a",
        colorPrimaryLight: "#7ed56f",
        colorPrimaryDark: "#28b485",
        colorSecondaryLight: "#ffb900",
        colorSecondaryDark: "#ff7730",
        colorTertiaryLight: "#2998ff",
        colorTertiaryDark: "#5643fa",
        colorGreyLight1: "#f7f7f7",
        colorGreyLight2: "#eee",
        colorGreyDark: "#777",
        colorGreyDark1: "#999",
        colorGreyDark2: "#333",
        colorWhite: "#fff",
        colorBlack: "#000"
      },
      outlineColor: {
        colorPrimary: "#55c57a",
        colorPrimaryLight: "#7ed56f",
        colorPrimaryDark: "#28b485",
        colorSecondaryLight: "#ffb900",
        colorSecondaryDark: "#ff7730",
        colorTertiaryLight: "#2998ff",
        colorTertiaryDark: "#5643fa",
        colorGreyLight1: "#f7f7f7",
        colorGreyLight2: "#eee",
        colorGreyDark: "#777",
        colorGreyDark1: "#999",
        colorGreyDark2: "#333",
        colorWhite: "#fff",
        colorBlack: "#000"
      },
      boxShadowColor: {
        colorPrimary: "#55c57a",
        colorPrimaryLight: "#7ed56f",
        colorPrimaryDark: "#28b485",
        colorSecondaryLight: "#ffb900",
        colorSecondaryDark: "#ff7730",
        colorTertiaryLight: "#2998ff",
        colorTertiaryDark: "#5643fa",
        colorGreyLight1: "#f7f7f7",
        colorGreyLight2: "#eee",
        colorGreyDark: "#777",
        colorGreyDark1: "#999",
        colorGreyDark2: "#333",
        colorWhite: "#fff",
        colorBlack: "#000"
      },
      accentColor: {
        colorPrimary: "#55c57a",
        colorPrimaryLight: "#7ed56f",
        colorPrimaryDark: "#28b485",
        colorSecondaryLight: "#ffb900",
        colorSecondaryDark: "#ff7730",
        colorTertiaryLight: "#2998ff",
        colorTertiaryDark: "#5643fa",
        colorGreyLight1: "#f7f7f7",
        colorGreyLight2: "#eee",
        colorGreyDark: "#777",
        colorGreyDark1: "#999",
        colorGreyDark2: "#333",
        colorWhite: "#fff",
        colorBlack: "#000"
      },

      fontSize: {
        defaultFontSize: "1.6rem"
      },  

      clipPath: {
        polygon85: 'polygon(0 0, 100% 0, 100% 85vh, 0 100%)',
        polygon75: 'polygon(0 0, 100% 0, 100% 75vh, 0 100%)',
        clipPath1: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",

        clipPathTop: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
      },

      textShadow: {
        custom: '.5rem 1rem 2rem rgba(0, 0, 0, 0.2)', // or use a CSS variable
      },

      boxShadow: {
        aboutImageCustomShadow: "0 1.5rem 4rem rgba($color-black, .4)",
        featureCardShadow: "0 1.5rem 4rem rgba($color-black, .15)",
        sm: ""
      },

      screens: {
        // => @media (min-width: 0px - 400px) { }
        'xs': '400px',
        // => @media (min-width: 400px - 600px) { Phones }
        'sm': '600px',
        // => @media (min-width: 600px - 900px) { Tablet portrait }
        'md': '900px',
        // => @media (min-width: 900px - 1200px) { Tablet landscape }
        'lg': '1200px',
        // => @media (min-width: 1200px - 1800px) { this is where our normal styles apply }
        'xl': '1800px',
        // => @media (min-width: 1536px) { Big desktop }
        '2xl': '1800px',
      },

      rotate: {
        flip: "rotateY(180deg)"
      },
      // TRANSITION TIMING
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      // ANIMATION
      animation: {
        moveInLeft: "moveInLeft 1s ease-in-out",
        moveInRight: "moveInRight 1s ease-in-out",
        moveInBottom: "moveInBottom 1s ease-in-out",
      },
      keyframes: {
        moveInLeft: {
          '0%': { 
            opacity: "0",
            transform: 'translateX(-10rem)' 
          },
          "80%": {
            transform: "translateX(1rem)"
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)"
          }
        },
        moveInRight: {
          '0%': { 
            opacity: "0",
            transform: 'translateX(10rem)' 
          },
          "80%": {
            transform: "translateX(-1rem)"
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)"
          }
        },
        moveInBottom: {
          '0%': { 
            opacity: "0",
            transform: 'translateY(3rem)' 
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)"
          }
        },
      }
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      addUtilities({
        '.clip-path-polygon85': {
          clipPath: 'polygon(0 0, 100% 0, 100% 85vh, 0 100%)',
        },
        '.clip-path-polygon75': {
          clipPath: 'polygon(0 0, 100% 0, 100% 75vh, 0 100%)',
        },
        '.clip-path-clipPath1': {
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        },
        '.clip-path-clipPathTop': {
          clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)',
        },
        '.text-shadow-custom': {
          textShadow: '.5rem 1rem 2rem rgba(0, 0, 0, 0.2)'
        },
        ".rotate-flipy180": {
          rotate: "rotateY(180deg)"
        },
      });
    },
  ],
};
export default config;
