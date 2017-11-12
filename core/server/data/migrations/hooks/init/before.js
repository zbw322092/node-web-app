const Promise = require('bluebird');
const logging = require('../../../../logging.js');

module.exports = function before() {
  logging.info('before init hook');
  
  return Promise.resolve();
};