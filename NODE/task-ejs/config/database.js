const sequelize = require("sequelize");
const db = new sequelize({
  dialect: "sqlite",
  storage: "task.sqlite",
});

db.sync();

module.exports = db;
