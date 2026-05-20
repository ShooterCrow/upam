module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "spektr-cyan": {
          50: "#ecfeff",
        },
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      perspective: {
        2000: "2000px",
      },
    },
  },
  plugins: [],
};
