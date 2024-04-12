const { destroy, getAll, update, store } = require("../controller/productController")
const express = require("express")
const router = express.Router()


router.get("/product", getAll)
router.post("/product", store)
router.put("/product/:id", update)
router.delete("/product/:id", destroy)

module.exports = router