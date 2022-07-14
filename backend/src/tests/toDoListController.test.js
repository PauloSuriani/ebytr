const { expect } = require('chai');
const sinon = require('sinon');

const toDoListService = require('../services/toDoListService');
const toDoListController = require('../controllers/toDoListController');

describe('Test in ToDoList Controllers', () => {
  const fakeList = [{
    "id":1,
    "description":"Primeira tarefa: organizar BD",
    "completed":1,
    "data":"2022-07-04T03:00:00.000Z",
  }];

  describe('Check getAllTasks call', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });
    after(() => {
        toDoListService.getAllTasks.restore();
    });

    it('Check if it throws a code 200 response', async () => {
      sinon.stub(toDoListService, 'getAllTasks').resolves(fakeList);
      await toDoListController.getAllTasks(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  })
})