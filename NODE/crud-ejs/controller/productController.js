const Product = require('../model/product.js');
const controller = {};

controller.getAll = (req, res) => {
  Product.findAll().then((queryResult) => {
    res.render('index', { products: queryResult });
  });
};

controller.create = (req, res) => {
  res.render('create');
};

controller.edit = (req, res) => {
  Product.findByPk(req.params.id).then((product) => {
    res.render('edit', { product: product });
  });
};

controller.store = (req, res) => {
  const product = {
    quantity: req.body.quantity,
    name: req.body.name,
    price: req.body.price,
  };

  console.log(product);

  Product.create(product)
    .then((product) => {
      res.redirect('/product');
    })
    .catch((err) => {
      res.send(err);
    });
};

controller.update = (req, res) => {
  const product = {
    quantity: parseInt(req.body.quantity),
    name: req.body.name,
    price: parseFloat(req.body.price),
  };

  Product.update(product, { where: { id: req.params.id } })
    .then((product) => res.redirect('/product'))
    .catch((err) => {
      res.send(err);
    });
};

controller.destroy = (req, res) => {
  Product.destroy({ where: { id: req.params.id } }).then(() =>
    res.redirect('/product')
  );
};

module.exports = controller;
