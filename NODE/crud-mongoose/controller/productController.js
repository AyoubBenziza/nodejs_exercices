const controller = {};
const Product = require('../model/product');

controller.getAll = (req, res) => {
  Product.find()
  .then( (queryResult) => res.json(queryResult) )
  .catch( (err) => res.json(err));
};

controller.store = (req, res) => {

  const product_data = {
    name : req.body.name,
    price : req.body.price,
    quantity : req.body.quantity,
  }

  Product.create(product_data)
  .then( (queryResult) => res.json(queryResult) )
  .catch( (err) => res.json(err));

};

controller.update = (req, res) => {
  const product_data = {}

  if (req.body.name != undefined) product_data.name = req.body.name
  if (req.body.price != undefined) product_data.price = req.body.price
  if (req.body.quantity != undefined) product_data.quantity = req.body.quantity

  Product.updateOne({_id : req.params.id}, product_data)
  .then( (queryResult) => res.json(queryResult) )
  .catch( (err) => res.json(err));
};

controller.destroy = (req, res) => {
  Product.deleteOne({_id : req.params.id})
  .then( (queryResult) => res.json(queryResult) )
  .catch( (err) => res.json(err));
};

module.exports = controller;
