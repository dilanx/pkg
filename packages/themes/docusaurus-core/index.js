const path = require('path');

module.exports = () => ({
  name: '@dilanx/themes/docusaurus-core',
  getThemePath() {
    return path.resolve(__dirname, './theme');
  },
});
