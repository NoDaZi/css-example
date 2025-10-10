// postcss.config.js
console.log("[POSTCSS] loaded from:", __filename);
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};
