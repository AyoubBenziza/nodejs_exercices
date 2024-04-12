const fs = require("fs");
const path = require("path");
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "db.json")));

//--------------GET---------------//
const getAll = (req, res) => {
  res.json(db);
};

const getById = (req, res) => {
  res.json(db.find((obj) => obj.id == req.params.id));
};

//-------------POST--------------//
const createTask = (req, res) => {
  req.body.id = db.length + 1;
  req.body.createdAt = new Date(Date.now()).toLocaleString("fr-FR");
  db.push(req.body);
  fs.writeFileSync(path.join(__dirname, "..", "db.json"), JSON.stringify(db));
  res.json(req.body);
};

//-------------PUT--------------//
const updateTask = (req, res) => {
  const element = db.find((obj) => obj.id == req.params.id);
  let { task, done } = req.body;
  element.task = task;
  element.done = done;
  fs.writeFileSync(path.join(__dirname, "..", "db.json"), JSON.stringify(db));
  res.send("Modification effectuée");
};

//------------DELETE-----------//
const deleteTask = (req, res) => {
  const index = db.findIndex((obj) => obj.id == req.params.id);
  db.splice(index, 1);
  fs.writeFileSync(path.join(__dirname, "..", "db.json"), JSON.stringify(db));
  res.send("Suppression effectuée");
};

module.exports = { getAll, getById, createTask, updateTask, deleteTask };
