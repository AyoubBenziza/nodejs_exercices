const express = require("express")
const router = express.Router()
const taskController = require("../controller/taskController")


router.get("/", taskController.index)
router.get("/create", taskController.create)
router.get("/edit/:id", taskController.edit)


router.get("/toggle-done/:id", taskController.toggleDone)
router.post("/store", taskController.store)
router.post("/edit/:id", taskController.update)
router.get("/delete/:id", taskController.delete)


module.exports = router;