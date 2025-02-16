/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = theme("colors");

  // Flatten the color object (handling nested colors like 'blue.500')
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
