const debug = require('ghost-ignition').debug('site');
const path = require('path');
const express = require('express');
const config = require('../config');
const routes = require('./routes');

module.exports = function setupSiteApp() {
  debug('Site setup start');

  const siteApp = express();

  siteApp.set('views', path.join(process.cwd(), config.get('paths:defaultViews')));
  
  siteApp.use(routes());

  debug('Site setup end');

  return siteApp;
};