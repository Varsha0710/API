const {path} = require('path');
require('dotenv').config();

connection = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host:'localhost',
    port: 4000,
    dialect: 'mysql'
};

module.exports = connection;