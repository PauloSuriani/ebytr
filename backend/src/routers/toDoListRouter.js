const express = require('express');

const toDoListController = require('../controllers/toDoListController');

const routers = express.Router();

routers.get('/', toDoListController.getAllTasks);

module.exports = routers;