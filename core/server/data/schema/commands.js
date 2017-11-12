const keys = require('lodash/keys');
const each = require('lodash/each');
const db = require('../db');
const schema = require('./schema');

const addTableColumn = (tableName, table, columnName) => {
  let column;
  let columnSpec = schema[tableName][columnName] || {};

  // column type
  if (columnSpec.type === 'text' && columnSpec.hasOwnProperty('fieldtype')) {
    column = table[columnSpec.type](columnName, columnSpec.fieldtype);
  } else if (columnSpec.type === 'string') {

    let maxlength = columnSpec.hasOwnProperty('maxlength') || 255;
    column = table[columnSpec.type](columnName, maxlength);

  } else if (columnSpec.type === 'float' || columnSpec.type === 'decimal') {

    let precision = columnSpec.hasOwnProperty('precision') || 8;
    let scale = columnSpec.hasOwnProperty('scale') || 2;
    column = table[columnSpec.type](columnName, precision, scale);

  } else if (columnSpec.type === 'increments') {
    column = table.increments(columnName);
  } else {
    column = table[columnSpec.type](columnName);
  }

  // nullable
  if (columnSpec.hasOwnProperty('nullable') && columnSpec.nullable === true) {
    column.nullable();
  } else {
    column.nullable(false);
  }

  // primary key
  if (columnSpec.hasOwnProperty('primary') && columnSpec.primary === true) {
    column.primary();
  }

  // unique key
  if (columnSpec.hasOwnProperty('unique') && columnSpec.unique) {
    column.unique();
  }

  // unsigned
  if (columnSpec.hasOwnProperty('unsigned') && columnSpec.unsigned) {
    column.unsigned();
  }

  // references
  if (columnSpec.hasOwnProperty('references')) {
    column.references(columnSpec.references);
  }

  // defult value
  if (columnSpec.hasOwnProperty('defaultTo')) {
    column.defaultTo(columnSpec.defaultTo);
  }

};

const createTable = (tableName, transaction) => {
  let dbInstance = transaction || db.knex;

  return dbInstance.schema.createTableIfNotExists(tableName, (t) => {
    let columnKeys = _.keys(schema[tableName]);
    each(columnKeys, (columnName) => {
      addTableColumn(tableName, t, columnName);
    });
  });
};

module.exports = {
  addTableColumn,
  createTable
};