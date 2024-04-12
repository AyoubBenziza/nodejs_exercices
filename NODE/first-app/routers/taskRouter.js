const express = require("express");
const {
  deleteTask,
  updateTask,
  createTask,
  getById,
  getAll,
} = require("../controllers/taskController");
const router = express.Router();

//--------------GET---------------//
router.get("/", getAll);
router.get("/:id", getById);

//-------------POST--------------//
router.post("/", createTask);

//-------------PUT--------------//
router.put("/:id", updateTask);

//------------DELETE-----------//
router.delete("/:id", deleteTask);

module.exports = router;
