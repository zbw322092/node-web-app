const Promise = require('bluebird');
const logging = require('../../../../../logging.js');

module.exports = function after() {
  logging.info('after init hook');

  return Promise.resolve();
};