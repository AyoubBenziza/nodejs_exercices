const sequelize = require('sequelize');
const db = require('../config/database');


const Task = db.define('task', 
{
    title: {
        type: sequelize.STRING
    },
    description: {
        type: sequelize.STRING
    },
    done : {
        type: sequelize.BOOLEAN
    },
    start_date : {
        type: sequelize.DATE
    },
    end_date : {
        type: sequelize.DATE
    }
});

module.exports = Task;