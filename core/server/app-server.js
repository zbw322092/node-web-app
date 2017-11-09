const debug = require('ghost-ignition').debug('server');
const Promise = require('bluebird');

class AppServer {

  constructor (rootApp) {
    this.rootApp = rootApp;
    this.httpServer = null;
  }

  start () {
    debug('Starting...');

    return new Promise((resolve, reject) => {
      this.httpServer = this.rootApp.listen(9999, () => {
        console.log('Server is listening on port 9999');
      });

      this.httpServer.on('listening', () => {
        debug('...Started');
        resolve(this);
      });
    })

  }

}

module.exports = AppServer;