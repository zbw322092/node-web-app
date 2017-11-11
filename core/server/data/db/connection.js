const knex = require('knex');
const config = require('../../config');
let knexInstance;

const dbConfig = (configObj) => {

  let client = configObj.client;

  if (client === 'sqlite3') {
    configObj.useNullAsDefault = configObj.useNullAsDefault || false;
  }

  if (client === 'mysql') {
    // to do
  }

  return configObj;
};

if (!knexInstance && config.get('database') && config.get('database:client')) {
  let configObj = config.get('database');
  knexInstance = knex(dbConfig(configObj));
}

module.exports = knexInstance;