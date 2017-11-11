const debug = require('ghost-ignition').debug('server');
const Promise = require('bluebird');
const config = require('./config');

class AppServer {

  constructor (rootApp) {
    this.rootApp = rootApp;
    this.httpServer = null;
  }

  start () {
    debug('Starting...');

    let port = config.get('server:port');
    let host = config.get('server:host');
    return new Promise((resolve, reject) => {
      this.httpServer = this.rootApp.listen(port, host, () => {
        console.log(`Server is running: ${host}:${port}`);
      });

      this.httpServer.on('listening', () => {
        debug('...Started');
        resolve(this);
      });
    })

  }

}

module.exports = AppServer;