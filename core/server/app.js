const debug = require('ghost-ignition').debug('app');
const express = require('express');
const compression = require('compression');
const config = require('./config');
const logRequest = require('./middleware/log-request.js');

module.exports = () => {
  debug('ParentApp setup start');
  
  const parentApp = express();

  parentApp.enable('trust proxy');

  parentApp.use(logRequest);

  if (config.get('compress') !== false) {
    parentApp.use(compression());
  }

  parentApp.use(require('./site')());

  debug('ParentApp setup end');

  return parentApp;
}