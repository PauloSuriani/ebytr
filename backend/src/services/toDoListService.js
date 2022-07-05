const toDoListModel = require('../models/toDoListModel');

const getAllTasks = async () => {
  const result = await toDoListModel.getAllTasks();
  return result; 
}

module.exports = {
    getAllTasks,
}