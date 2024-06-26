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
const validate = require("../validators/validate");

//--------------GET---------------//
router.get("/", getAll);
router.get("/:id", validator.idParam, validate, getById);

//-------------POST--------------//
router.post("/", validator.bodyParam, validate, createTask);

//-------------PUT--------------//
router.put(
  "/:id",
  validator.idParam,
  validator.bodyParam,
  validate,
  updateTask
);

//------------DELETE-----------//
router.delete("/:id", validator.idParam, validate, deleteTask);

module.exports = router;
