const { expect } = require("@playwright/test");
const { PAGE_TEXT } = require("../data/pageText");

class Homepage {

    constructor(page) {
        this.page = page;
        this.header = page.locator('.flex-1 > .hidden');
        this.homeMenu = page.getByRole('link', { name: 'HOME' });
        this.loginMenu = page.getByRole('link', { name: 'LOGIN' });
        this.formMenu = page.getByRole('link', { name: 'FORM' });
        this.tableMenu = page.getByRole('link', { name: 'TABLE' });
        this.tasksMenu = page.getByRole('link', { name: 'TASKS' });
        this.aboutMenu = page.getByRole('link', { name: 'SOBRE' });
        this.banner = page.getByRole('img', { name: 'Bug Buster Mentoria Banner' });
        this.description = page.getByText('Esta página foi desenvolvida');
        this.challengeHeader = page.getByRole('heading', { name: 'Desafios Disponíveis:' });
        this.challengeLogin = page.getByText('Login', { exact: true });
        this.challengeForm = page.getByText('Formulários');
        this.challengeTable = page.getByText('Tabela dinâmica');
        this.otherChallenges = page.getByText('E muito mais!');
        this.footer = page.getByText('© 2024 Bug Buster Mentoria.');
    }

    async navigateToHomepage() {
        await this.page.goto('/');
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

    async validateBanner() {
        await expect(this.banner).toBeVisible();
    }

    async validateDescription() {
        await expect(this.description).toHaveText(PAGE_TEXT.home.description);
    }

    async validateChallenges() {
        await expect(this.challengeHeader).toBeVisible();
        await expect(this.challengeHeader).toHaveText(PAGE_TEXT.home.challenge.header);
        await expect(this.challengeLogin).toBeVisible();
        await expect(this.challengeLogin).toHaveText(PAGE_TEXT.home.challenge.login);
        await expect(this.challengeForm).toHaveText(PAGE_TEXT.home.challenge.form);
        await expect(this.challengeTable).toHaveText(PAGE_TEXT.home.challenge.table);
        await expect(this.otherChallenges).toHaveText(PAGE_TEXT.home.challenge.others);
    }

    async validateFooter() {
        await expect(this.footer).toHaveText(PAGE_TEXT.footer);
    }
}

module.exports = { Homepage };