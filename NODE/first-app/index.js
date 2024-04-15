const express = require("express");
const taskRouter = require("./routers/taskRouter");
const { db } = require("./config/database");
const port = 3000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// db.Sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

const test = async () => await db.authenticate();

try {
  test().then(() =>
    console.log("Connection has been established successfully.")
  );
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Route CRUD Tasks
app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log(`App running on port ${port}, link: http://localhost:${port}/`);
});
