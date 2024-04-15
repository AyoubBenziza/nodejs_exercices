const express = require("express")
const mongoose = require("mongoose")
const taskRouter = require("./router/taskRouter")
require("dotenv").config()
const app = express()

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then( () => {
  console.log("Connected to db")

  app.listen(process.env.SERVER_PORT, () => {
    console.log("App running on port 3000")
  })

}).catch( err => {
  console.log(err)
})


app.use("/task", taskRouter)



