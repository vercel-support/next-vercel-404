const { i18n } = require('./next-i18next.config');
const path = require('path');

module.exports = {
  i18n,
  reactStrictMode: true,
  localePath: path.resolve('/var/task/public/locales'),
};
