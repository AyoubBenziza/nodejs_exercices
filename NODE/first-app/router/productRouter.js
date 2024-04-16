const { destroy, getAll, update, store, getById } = require("../controller/productController")
const {validateIdParam, validateBodyParam } = require("../validator/productValidator")
const validate = require("../validator/validate")
const express = require("express")
const router = express.Router()

router.get("", getAll)
router.get("/:id", getById)
router.post("",validateBodyParam,validate,  store)
router.put("/:id",validateIdParam ,validateBodyParam , validate , update)
router.delete("/:id",validateIdParam, validate , destroy)

module.exports = router
