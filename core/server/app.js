const debug = require('ghost-ignition').debug('app');
const express = require('express');
const logRequest = require('./middleware/log-request.js');

module.exports = () => {
  debug('ParentApp setup start');
  
  const parentApp = express();

  parentApp.enable('trust proxy');

  parentApp.use(logRequest);

  parentApp.use(require('./site')());

  debug('ParentApp setup end');

  return parentApp;
}