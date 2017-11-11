const config = require('./config');
const logging = require('ghost-ignition').logging;

module.exports = logging({
  env: config.get('env'),
  domain: config.get('url'),
  path: config.get('logging:path') || config.getContentPath('logs'),
  mode: config.get('logging:mode'),
  level: config.get('logging:level'),
  transports: config.get('logging:transports'),
  loggly: config.get('logging:loggly'),
  rotation: config.get('logging:rotation')
});