const express = require('express');
const app = express();
const taskRouter = require("./router/taskRouter") 

app.use(express.json());
app.listen(3000, () => {
  console.log('App running on port 3000');
});

app.use("/task", taskRouter)
