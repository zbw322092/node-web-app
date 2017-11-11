const packageInfo = require('../../../package.json') || {};
const version = packageInfo.version;

module.exports = {
  full: version,
  safe: version.match(/^(\d+\.)?(\d+)/)[0]
};