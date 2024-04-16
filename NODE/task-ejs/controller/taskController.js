const Task = require("../model/Task.js");
const controller = {};

controller.getAll = (req, res) => {
  Task.findAll().then((queryResult) => {
    res.render("index", { tasks: queryResult });
  });
};

controller.create = (req, res) => {
  res.render("create");
};

controller.edit = (req, res) => {
  Task.findByPk(req.params.id).then((task) => {
    res.render("edit", { task: task });
  });
};

controller.store = (req, res) => {
  const task = {
    title: req.body.title,
    description: req.body.description,
    start_date:
      req.body.start_date !== undefined
        ? req.body.start_date
        : new Date(Date.now()).toUTCString(),
    end_date: req.body.end_date,
    done: req.body.done,
  };

  console.log(task);

  Task.create(task)
    .then((task) => {
      res.redirect("/task");
    })
    .catch((err) => {
      res.send(err);
    });
};

controller.update = (req, res) => {
  const task = {
    quantity: parseInt(req.body.quantity),
    description: req.body.description,
    start_date: req.body.start_date,
    end_date:
      req.body.end_date ?? req.body.done
        ? new Date(Date.now()).toUTCString()
        : null,
    done: req.body.done,
  };

  Task.update(task, { where: { id: req.params.id } })
    .then((task) => res.redirect("/task"))
    .catch((err) => {
      res.send(err);
    });
};

controller.destroy = (req, res) => {
  Task.destroy({ where: { id: req.params.id } }).then(() =>
    res.redirect("/task")
  );
};

module.exports = controller;
