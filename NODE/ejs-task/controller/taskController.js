const controller = {};
const Task = require('../model/Task');
const moment = require('moment');

controller.index = (req, res) => {
  Task.findAll().then((tasks) => {
    res.render('index', { tasks: tasks });
  });
};

controller.store = (req, res) => {
  Task.create(req.body).then(() => {
    res.redirect('/task');
  });
};
controller.create = (req, res) => {
  res.render('create');
};

controller.update = (req, res) => {
  Task.update(req.body, { where: { id: req.params.id } }).then(() => {
    res.redirect('/task');
  });
};

controller.edit = (req, res) => {
  Task.findByPk(req.params.id).then((task) => {
    if (task.start_date) {
      task.start_date_formated = moment(task.start_date).format('YYYY-MM-DD');
    }
    if (task.end_date) {
      task.end_date_formated = moment(task.end_date).format('YYYY-MM-DD');
    }

    res.render('edit', { task: task });
  });
};

controller.delete = (req, res) => {
  Task.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect('/task');
  });
};

controller.toggleDone = (req, res) => {
  Task.findByPk(req.params.id).then((task) => {
    if (typeof task?.done === 'undefined') {
      task.done = true;
    }

    task.done = !task.done;
    task.save().then(() => {
      res.redirect('/task');
    });
  });
};

module.exports = controller;
