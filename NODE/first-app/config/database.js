
const sequelize = require('sequelize');
const db = new sequelize({
  dialect: 'sqlite',
  storage: '../product.sqlite'
});

db.sync();

module.exports = db;