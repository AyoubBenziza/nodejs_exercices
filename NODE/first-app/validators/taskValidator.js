const { param, body } = require("express-validator");
const fs = require("fs");
const path = require("path");
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "db.json")));

const idParam = [
  param("id")
    .notEmpty()
    .isNumeric()
    .custom((id) => db.findIndex((obj) => obj.id === parseInt(id)) !== -1),
];
const bodyParam = [
  body("title").notEmpty(),
  body("description").notEmpty().optional(),
  body("done").notEmpty().isBoolean().optional(),
  body("createdAt").notEmpty().optional(),
  body("finishedAt").notEmpty().optional(),
];

module.exports = { bodyParam, idParam };
