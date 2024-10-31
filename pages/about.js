const { expect } = require("@playwright/test");
const { PAGE_TEXT } = require("../data/pageText");

class About {
    constructor(page) {
        this.page = page;
        this.header = page.locator('.flex-1 > .hidden');
        this.homeMenu = page.getByRole('link', { name: 'HOME' });
        this.loginMenu = page.getByRole('link', { name: 'LOGIN' });
        this.formMenu = page.getByRole('link', { name: 'FORM' });
        this.tableMenu = page.getByRole('link', { name: 'TABLE' });
        this.tasksMenu = page.getByRole('link', { name: 'TASKS' });
        this.aboutMenu = page.getByRole('link', { name: 'SOBRE' });
        this.title = page.getByRole('heading', { name: 'Sobre Mim' });
        this.text1 = page.getByText('Sou um engenheiro de testes');
        this.text2 = page.getByText('e mentor na área de automação');
        this.linkedIn = page.locator('#linkedinLink');
        this.gitHub = page.locator('#githubLink');
        this.email = page.locator('#emailLink');
        this.medium = page.getByRole('link', { name: 'M', exact: true });
        this.findOutMore = page.getByText('Quer saber mais? Acesse:');
        this.link = page.getByRole('link', { name: 'Bug Buster' });
        this.footer = page.getByText('© 2024 Bug Buster Mentoria.');
    }

    async navigateToAbout() {
        await this.page.goto('/about');
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

    async validateDescription() {
        await expect(this.title).toBeVisible();
        await expect(this.text1).toHaveText(PAGE_TEXT.about.aboutMe.firstPart);
        await expect(this.text2).toHaveText(PAGE_TEXT.about.aboutMe.secondPart);
    }

    async validateLinks() {
        await expect(this.linkedIn).toBeVisible();
        await expect(this.gitHub).toBeVisible();
        await expect(this.email).toBeVisible();
        await expect(this.medium).toBeVisible();
    }

    async validateFooter() {
        await expect(this.footer).toHaveText(PAGE_TEXT.footer);
    }

    async validateBugBusterLink() {
        await expect(this.findOutMore).toBeVisible();
        await expect(this.link).toBeVisible();
    }
}
module.exports = { About };