const express = require("express")
const app = express()
require("dotenv").config()
const productRouter = require("./router/productRouter")
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.listen(process.env.SERVER_PORT, () => {
  console.log("App running on port " + process.env.SERVER_PORT)
})

app.set("view engine", "ejs")
app.set("views", "./views")

app.use("/product", productRouter)

const fs = require('node:fs');
const content = 'Some content!\n';
fs.appendFile('log.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // done!
  }
});
