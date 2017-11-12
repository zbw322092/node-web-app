const Promise = require('bluebird');
const logging = require('../../../../logging.js');

module.exports = function before() {
  logging.info('after migrate hook');

  return Promise.resolve();
};