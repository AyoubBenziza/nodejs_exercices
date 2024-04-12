const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('App running on port 3000');
});

// // localhost:3000/
// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });

// // localhost:3000/hello/tata
// app.get("/hello/:name", (req, res) => {
//   const name = req.params.name
//   res.send(`Hello ${name}`);
// })

// // localhost:3000/params?name=toto
// app.get("/param", (req, res) => {
//   const name = req.query.name
//   const lastname = req.query.lastname
//   res.send(`Hello ${name} ${lastname}`);
// })

const products = [
  { id: 1, name: 'souris', quantity: 12, price: 15.5 },
  { id: 2, name: 'souris', quantity: 12, price: 15.5 }
];

// CRUD

// Create POST
// Read GET
// Update PUT/PATCH
// Delete DELETE


app.get('/product', (req, res) => {
  res.send(products);
}); // Liste

app.post('/product', (req, res) => {

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
}); // Créer un produit

app.put('/product/:id', (req, res) => {
  const id = parseInt( req.params.id );
  const index = products.findIndex( (product) => product.id === id  )
  const product = {
    id : id,
    quantity: parseInt(req.query.quantity),
    name : req.query.name,
    price : parseFloat(req.query.price),
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



