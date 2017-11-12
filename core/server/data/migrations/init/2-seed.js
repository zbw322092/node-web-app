const Promise = require('bluebird');
const logging = require('../../../logging.js');

module.exports.up = (options) => {
  let transacting = options.transacting;

  logging.info('Inserting seeds');
  return Promise.resolve();
};


module.exports.down = () => { 
  return Promise.resolve();
};