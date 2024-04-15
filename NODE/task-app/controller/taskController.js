const Tasks = require('../model/task');
const controller = {};

controller.getAll = (req, res) => {
  Tasks.findAll().then((tasks) => res.json(tasks));
};

controller.store = (req, res) => {
  const task = {
    title: req.body.title,
  };

  if (req.body.description !== undefined)
    task.description = req.body.description;
  if (req.body.done !== undefined) task.done = req.body.done;
  if (req.body.start_date !== undefined) task.start_date = req.body.start_date;
  if (req.body.end_date !== undefined) task.end_date = req.body.end_date;

  Tasks.create(task).then((queryResult) => res.json(queryResult));
};

controller.update = (req, res) => {
  const task = {};

  if (req.body.title !== undefined) task.title = req.body.title;
  if (req.body.description !== undefined)
    task.description = req.body.description;
  if (req.body.done !== undefined) task.done = req.body.done;
  if (req.body.start_date !== undefined) task.start_date = req.body.start_date;
  if (req.body.end_date !== undefined) task.end_date = req.body.end_date;

  Tasks.update(task, { where: { id: req.params.id } }).then((queryResult) =>
    res.json(queryResult)
  );
};

controller.destroy = (req, res) => {
  Tasks.destroy({ where: { id: req.params.id } }).then((queryResult) =>
    res.json(queryResult)
  );
};

module.exports = controller;
