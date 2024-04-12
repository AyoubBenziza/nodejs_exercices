
app.put('/product/:id', (req, res) => {
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
}); // modifier

app.delete('/product/:id', (req, res) => {
  const id = parseInt( req.params.id );
  const index = products.findIndex( (product) => product.id === id  )
  products.splice(index, 1);

  res.send("Product deleted")
}); // supprimer
