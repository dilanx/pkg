/* https://prettier.io/docs/en/options.html */

/** @type { import('@types/prettier').Config } */
module.exports = {
  ...require('../prettier'),
  plugins: ['prettier-plugin-tailwindcss'],
};
