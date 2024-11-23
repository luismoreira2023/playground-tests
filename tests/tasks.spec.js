const { test } = require("@playwright/test");
const { Tasks } = require("../pages/tasks");
const { TASK_LIST } = require("../data/taskNames");

test('Submit new task', async ({ page }) => {
    const tasksPage = new Tasks(page);
    await tasksPage.navigateToTasks();
    await tasksPage.validateTitle('Playground page');
    await tasksPage.validateHeader();
    await tasksPage.validateMenu();
    await tasksPage.validateInstructions();
    await tasksPage.validateNewTask();
    await tasksPage.validateFooter();
    for(const task of TASK_LIST) {
        await tasksPage.fillTask(task.name);
        await tasksPage.submitTask();
    }
    const totalTasks = TASK_LIST.length;
    for (let i = totalTasks - 1; i >= 0; i--) {
        await tasksPage.completeTask(i);
    }
});
