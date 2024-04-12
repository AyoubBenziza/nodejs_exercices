const express = require("express");
const taskRouter = require("./routers/taskRouter");
const port = 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Route CRUD Tasks
app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log(`App running on port ${port}, link: http://localhost:${port}/`);
});
