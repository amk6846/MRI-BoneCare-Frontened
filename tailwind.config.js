const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}", // for your other files
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
      screens: {
        smm: "550px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = theme("colors");

  const flattenColors = (obj, prefix = "") =>
    Object.entries(obj).reduce((acc, [key, val]) => {
      if (typeof val === "object") {
        Object.assign(acc, flattenColors(val, `${prefix}${key}-`));
      } else {
        acc[`--${prefix}${key}`] = val;
      }
      return acc;
    }, {});

  const newVars = flattenColors(allColors);

  addBase({
    ":root": newVars,
  });
}
