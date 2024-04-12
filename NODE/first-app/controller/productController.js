const products = [
  { id: 1, name: 'souris', quantity: 12, price: 15.5 },
  { id: 2, name: 'souris', quantity: 12, price: 15.5 }
];


const getAll = (req, res) => {
  res.send(products);
};

const store = (req, res) => {

  console.log("Body :")

  console.log(req.body)
  const product = {
    id : Date.now(),
    quantity: req.body.quantity,
    name : req.body.name,
    price : req.body.price
  }
  products.push(product)
  res.send(product)
}; // Créer un produit

const update = (req, res) => {
  const id = parseInt( req.params.id );
  const index = products.findIndex( (product) => product.id === id  )
  const product = {
    id : id,
    quantity: parseInt(req.body.quantity),
    name : req.body.name,
    price : parseFloat(req.body.price),
  }

  products[index] = product

  res.send(product)
}; // modifier

const destroy = (req, res) => {
  const id = parseInt( req.params.id );
  const index = products.findIndex( (product) => product.id === id  )
  products.splice(index, 1);

  res.send("Product deleted")
}; // supprimer


module.exports = { destroy, getAll, update, store }