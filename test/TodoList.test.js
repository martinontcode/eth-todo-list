const { assert } = require("chai");

const TodoList = artifacts.require('./TodoList.sol');

contract('TodoList', (accounts) => {
    before(async () => {
        this.TodoList = await TodoList.deployed();
    })

    // Test case - Deploy successful, address exists
    it('Deploy successful', async () => {
        const address = await this.TodoList.address;
        assert.notEqual(address, 0x0);
        assert.notEqual(address, '');
        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
    });

    it('Tasks received', async () => {
        const taskCount = await this.TodoList.taskCount();
        const task = await this.TodoList.tasks(taskCount);
        assert.equal(task.id.toNumber(), taskCount.toNumber());
        assert.equal(task.content, 'Check out my first example task');
        assert.equal(task.completed, false);
        assert.equal(taskCount.toNumber(), 1);
    });
})