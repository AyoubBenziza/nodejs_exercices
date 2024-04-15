const express = require('express');
const router = express.Router();
const controller = require('../controller/taskController')

const { validateIdParam, validateTaskBody } = require('../validator/taskValidator')
const validate = require('../validator/validator')


router.get('/', controller.getAll)
router.post('/',validateTaskBody, validate, controller.store)
router.put('/:id',validateTaskBody, validateIdParam, validate, controller.update)
router.delete('/:id', validateIdParam,validate , controller.destroy)

module.exports = router
