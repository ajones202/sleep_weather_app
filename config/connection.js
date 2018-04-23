const pgp = require('pg-promise')();

const config = require('./dbConfig.js');

const db = pgp(config);

module.exports = db;
