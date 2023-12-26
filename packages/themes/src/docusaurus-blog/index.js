const path = require('path');

module.exports = () => ({
  name: '@dilanx/themes/docusaurus-blog',
  getThemePath() {
    return path.resolve(__dirname, './theme');
  },
});
