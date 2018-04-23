const pgp = require('pg-promise')();

const config = require('./dbConfig.js');

const db = pgp(process.env.DATABASE_URL || config);

module.exports = db;
