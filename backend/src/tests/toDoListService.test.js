const { expect } = require('chai');

const toDoListService = require('../services/toDoListService');

describe('Test in ToDoList Service', () => {

  it('Check if getAllTaks returns an array', async () => {
    const response = await toDoListService.getAllTasks();

    expect(response).to.be.a('array');
  });
  
});