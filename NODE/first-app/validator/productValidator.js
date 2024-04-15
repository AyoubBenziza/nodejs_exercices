const { body, param, validationResult } = require('express-validator');
const products = require('../repository/productRepository');

const validateIdParam = [
  param('id')
    .notEmpty()
    .isNumeric()
];

const validateBodyParam = [
  body('quantity').not().isString().notEmpty().isInt({min:0}), 
  body('price').not().isString().notEmpty().isFloat({min:0}), 
  body('name').notEmpty().isString()
];


module.exports = { validateIdParam, validateBodyParam };
