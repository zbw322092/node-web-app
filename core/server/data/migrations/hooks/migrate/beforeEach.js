const Promise = require('bluebird');
const logging = require('../../../../logging.js');

module.exports = function before() {
  logging.info('before each migrate hook');

  return Promise.resolve();
};