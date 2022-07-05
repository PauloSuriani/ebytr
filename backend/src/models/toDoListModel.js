const connection = require('./dataBaseConnection');

const getAllTasks = async () => {
  const [tasks] = await connection.execute(
    'SELECT * FROM ToDoList.tasks ORDER BY tasks.id',    
  );
  return tasks;
}

module.exports = {
  getAllTasks,
}