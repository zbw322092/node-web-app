const debug = require('ghost-ignition').debug('app');
const express = require('express');

module.exports = () => {
  debug('ParentApp setup start');
  
  const parentApp = express();

  parentApp.enable('trust proxy');


  debug('ParentApp setup end');

  return parentApp;
}