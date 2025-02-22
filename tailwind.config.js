module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your files
  ],
   theme: {
    extend: {
      colors : {
        cusGrey : '#212121'
      },
      fontFamily: {
        bakbak: ["Bakbak One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
