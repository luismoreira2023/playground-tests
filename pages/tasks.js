const { expect } = require("@playwright/test");
const { PAGE_TEXT } = require("../data/pageText");

class Tasks {
    constructor(page) {
        this.page = page;
        this.header = page.locator('.flex-1 > .hidden');
        this.homeMenu = page.getByRole('link', { name: 'HOME' });
        this.loginMenu = page.getByRole('link', { name: 'LOGIN' });
        this.formMenu = page.getByRole('link', { name: 'FORM' });
        this.tableMenu = page.getByRole('link', { name: 'TABLE' });
        this.tasksMenu = page.getByRole('link', { name: 'TASKS' });
        this.aboutMenu = page.getByRole('link', { name: 'SOBRE' });
        this.rule1 = page.getByText('Adicione uma tarefa no campo');
        this.rule2 = page.getByText('A tarefa será listada abaixo');
        this.rule3 = page.getByText('Clique no botão "Completar"');
        this.taskTitle = page.getByRole('heading', { name: 'Lista de Tarefas' });
        this.taskBox = page.getByPlaceholder('Digite sua tarefa');
        this.submission = page.getByRole('button', { name: 'Adicionar' });
        this.footer = page.getByText('© 2024 Bug Buster Mentoria.');
        this.success = page.getByRole('heading', { name: 'Tarefas para fazer' });
        this.taskEnd = page.getByRole('heading', { name: 'Tarefas Completas' });
    }

    findCompletedTask(id) {
        return this.page.locator('#completeButton-' + id);
    }

    async navigateToTasks() {
        await this.page.goto('/tasks');
    }

    async validateTitle(title) {
        await expect(this.page).toHaveTitle(title);
    }

    async validateHeader() {
        await expect(this.header).toBeVisible();
    }

    async validateMenu() {
        await expect(this.homeMenu).toBeVisible();
        await expect(this.loginMenu).toBeVisible();
        await expect(this.formMenu).toBeVisible();
        await expect(this.tableMenu).toBeVisible();
        await expect(this.tasksMenu).toBeVisible();
        await expect(this.aboutMenu).toBeVisible();
    }

    async validateInstructions() {
        await expect(this.rule1).toHaveText(PAGE_TEXT.tasks.instructions.firstRule);
        await expect(this.rule2).toHaveText(PAGE_TEXT.tasks.instructions.secondRule);
        await expect(this.rule3).toHaveText(PAGE_TEXT.tasks.instructions.thirdRule);
    }

    async validateNewTask() {
        await expect(this.taskTitle).toBeVisible();
        await expect(this.taskBox).toBeVisible();
        await expect(this.submission).toBeVisible();
    }

    async validateFooter() {
        await expect(this.footer).toHaveText(PAGE_TEXT.footer);
    }

    async fillTask(task) {
        await this.taskBox.fill(task);
    }

    async submitTask() {
        await this.submission.click();
    }

    async completeTask(id) {
        const completedTask = this.findCompletedTask(id);
        await completedTask.click();
        await expect(this.taskEnd).toBeVisible();
    }
}
module.exports = { Tasks };