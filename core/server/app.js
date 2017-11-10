const debug = require('ghost-ignition').debug('app');
const express = require('express');

module.exports = () => {
  debug('ParentApp setup start');
  
  const parentApp = express();

  parentApp.enable('trust proxy');

  parentApp.use(require('./site')());

  debug('ParentApp setup end');

  return parentApp;
}