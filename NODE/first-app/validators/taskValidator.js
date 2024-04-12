const { param, body, validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "db.json")));

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  next();
};
const idParam = [
  param("id")
    .notEmpty()
    .isNumeric()
    .custom((id) => db.findIndex((obj) => obj.id === parseInt(id)) !== -1),
];
const bodyParam = [
  body("task").notEmpty(),
  body("done").notEmpty().isBoolean(),
];

module.exports = { validate, bodyParam, idParam };
