const debug = require('ghost-ignition').debug('site');
const express = require('express');
const routes = require('./routes');

module.exports = function setupSiteApp() {
  debug('Site setup start');

  const siteApp = express();
  
  siteApp.use(routes());

  debug('Site setup end');

  return siteApp;
};