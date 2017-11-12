const path = require('path');
const nconf = require('nconf');
const localUtils = require('./utils');
const env = process.env.NODE_ENV || 'development';
const _private = {};

_private.loadNconf = (options) => {

  options = options || {};

  const baseConfigPath = options.baseConfigPath || __dirname;
  const customConfigPath = options.customConfigPath || process.cwd();
  
  options = options || {};

  nconf.file('overrides', path.join(baseConfigPath, 'overrides.json'));

  /** 
   * common line arguments
   */
  nconf.argv();

  nconf.file('custom-env', path.join(customConfigPath, 'config.' + env + '.json')); // if necessary, add your custom config file.
  nconf.file('default-env', path.join(baseConfigPath, 'env', 'config.' + env + '.json'));
  nconf.file('defaults', path.join(baseConfigPath, 'defaults.json'));

  nconf.getContentPath = localUtils.getContentPath.bind(nconf);

  nconf.set('env', env);

  return nconf;
};

module.exports = _private.loadNconf();
module.exports.loadNconf = _private.loadNconf;