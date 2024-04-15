const sequelize = require("sequelize");
const db = require("../config/database");
const Task = db.define("task", {
  id: { type: sequelize },
});
