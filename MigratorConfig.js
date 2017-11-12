const path = require('path');
const config = require('./core/server/config');
const siteVersion = require('./core/server/utils/site-version.js');

module.exports = {
  currentVersion: siteVersion.safe,
  database: config.get('database'),
  migrationPath: path.join(process.cwd(), config.get('paths:migrationPath'))
};