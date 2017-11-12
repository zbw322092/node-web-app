const Promise = require('bluebird');
const logging = require('../../../../logging.js');

module.exports.up = function(options) {
  let transacting = options.transacting;
  logging.info('migration testing, version 1.0');
  return Promise.resolve();
};

module.exports.down = function() {
  return Promise.resolve();
};
