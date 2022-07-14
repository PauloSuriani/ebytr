const toDoListService = require('../models/toDoListModel');

const getAllTasks = async(_req, res) => {
  try {
    const tasks = await toDoListService.getAllTasks();
    return res.status(200).json(tasks);
  } catch (error){
    return res.status(404).json({message: 'Not found: Server issues'});
  }
}

module.exports = {
  getAllTasks,
};