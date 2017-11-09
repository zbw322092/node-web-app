const debug = require('ghost-ignition').debug('boot:init');
const app = require('./app.js');
const AppServer = require('./app-server.js');

function init () {
  debug('Init Start...');

  const parentApp = app();
  const appServer = new AppServer(parentApp);

  return appServer;
}

module.exports = init;