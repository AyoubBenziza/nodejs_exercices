const express = require("express");
const {
  deleteTask,
  updateTask,
  createTask,
  getById,
  getAll,
} = require("../controllers/taskController");
const router = express.Router();
const validator = require("../validators/taskValidator");

//--------------GET---------------//
router.get("/", getAll);
router.get("/:id", validator.idParam, validator.validate, getById);

//-------------POST--------------//
router.post("/", validator.bodyParam, validator.validate, createTask);

//-------------PUT--------------//
router.put(
  "/:id",
  validator.idParam,
  validator.bodyParam,
  validator.validate,
  updateTask
);

//------------DELETE-----------//
router.delete("/:id", validator.idParam, validator.validate, deleteTask);

module.exports = router;
