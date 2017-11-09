const server = require('./server');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const makeServer = (options) => {
  options = options || {};

  return server(options);
};

module.exports = makeServer;