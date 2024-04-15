const Task = require("../model/Task")
const controller = {};

controller.getAll = (req, res) => {
  Task.find()
  .then( (queryResult) => res.json(queryResult))
  .catch( (err) => res.json(err))
};
controller.store = (req, res) => {
  Task.create(req.body)
  .then( (queryResult) => res.json(queryResult))
  .catch( (err) => res.json(err))
};

controller.update = (req, res) => {
  Task.updateOne({ _id : req.params.id}, req.body)
  .then( (queryResult) => res.json(queryResult))
  .catch( (err) => res.json(err))
};
controller.destroy = (req, res) => {
  Task.deleteOne({_id : req.params.id})
  .then( (queryResult) => res.json(queryResult))
  .catch( (err) => res.json(err))
};

module.exports = controller
