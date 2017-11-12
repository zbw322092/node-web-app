const Promise = require('bluebird');
const logging = require('../../../../logging.js');

module.exports = function before() {
  logging.info('after each migrate hook');
  
  return Promise.resolve();
};