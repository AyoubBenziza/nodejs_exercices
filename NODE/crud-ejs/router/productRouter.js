const controller = require("../controller/productController")
const express = require("express")
const router = express.Router()

router.get("", controller.getAll)
router.get("/edit/:id", controller.edit)
router.get("/create", controller.create)


router.post("",controller.store)
router.post("/update/:id",controller.update)
router.get("/delete/:id",controller.destroy) // 

module.exports = router
