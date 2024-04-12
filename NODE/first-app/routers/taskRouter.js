const express = require("express");
const fs = require("fs");
const path = require("path");
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "db.json")));
const router = express.Router();

//--------------GET---------------//
router.get("/", (req, res) => {
  //   res.send("Liste des tâches!");
  res.json(db);
});
router.get("/:id", (req, res) => {
  //   res.send("Liste des tâches!");
  res.json(db.find((obj) => obj.id == req.params.id));
});

//-------------POST--------------//
router.post("/", (req, res) => {
  req.body.id = db.length + 1;
  req.body.createdAt = new Date(Date.now()).toLocaleString("fr-FR");
  db.push(req.body);
  fs.writeFileSync(path.join(__dirname, "..", "db.json"), JSON.stringify(db));
  res.json(req.body);
});

//-------------PUT--------------//
router.put("/:id", (req, res) => {
  const element = db.find((obj) => obj.id == req.params.id);
  let { task, done } = req.body;
  element.task = task;
  element.done = done;
  fs.writeFileSync(path.join(__dirname, "..", "db.json"), JSON.stringify(db));
  res.send("Modification effectuée");
});

//------------DELETE-----------//
router.delete("/:id", (req, res) => {
  // fs.writeFileSync(path.join(__dirname, "..", "db.json"),JSON.stringify(db));
  res.send("Suppression effectuée");
});

module.exports = router;
