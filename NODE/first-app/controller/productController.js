const Product = require('../model/product.js');

const getAll = (req, res) => {
  Product.findAll().then((products) => res.json(products));
};

const store = (req, res) => {
  const product = {
    quantity: req.body.quantity,
    name: req.body.name,
    price: req.body.price,
  };
  Product.create(product)
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.send(err);
    });
};

const update = (req, res) => {
  const product = {
    quantity: parseInt(req.body.quantity),
    name: req.body.name,
    price: parseFloat(req.body.price),
  };

  Product.update(product, { where: { id: req.params.id } })
    .then((product) => res.send(product))
    .catch((err) => {
      res.send(err);
    });
};

const destroy = (req, res) => {
  Product.destroy({ where: { id: req.params.id } }).then(() =>
    res.send('Product deleted')
  );
};

module.exports = { destroy, getAll, update, store };
