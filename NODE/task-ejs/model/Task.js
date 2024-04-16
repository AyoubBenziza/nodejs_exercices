const sequelize = require("sequelize");
const db = require("../config/database");

const Task = db.define("task", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: sequelize.STRING },
  description: { type: sequelize.STRING },
  start_date: { type: sequelize.DATE },
  end_date: { type: sequelize.DATE },
  done: { type: sequelize.TINYINT },
});

module.exports = Task;
