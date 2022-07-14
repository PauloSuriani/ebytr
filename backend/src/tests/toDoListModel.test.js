const { expect } = require('chai');

const toDoListModel = require('../models/toDoListModel');

describe('Test in ToDoList Model', () => {

  describe('Check if getAllTaks works fine', () => {

    it('Check if it returns an array', async () => {
      const response = await toDoListModel.getAllTasks();

      expect(response).to.be.a('array')
    });

    it('Check if response have "id" property', async () => {
      const response = await toDoListModel.getAllTasks();

      expect(response[0]).to.have.a.property('id')
    });

  });
});