const execa = require('execa');

module.exports = (api) => {
  if (!api.hasExtension('@niama/ts')) execa.sync('quasar', ['ext', 'add', '@niama/ts']);
  api.render('./templates');
};
