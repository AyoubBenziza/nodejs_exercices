const sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', 
{
    id : { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize.STRING  },
    price: { type: sequelize.FLOAT  },
    quantity: { type: sequelize.INTEGER }
});

module.exports = Product;
