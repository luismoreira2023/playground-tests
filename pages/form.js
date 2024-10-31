const { expect } = require("@playwright/test");
const { PAGE_TEXT } = require("../data/pageText");

class Form {
    constructor(page) {
        this.page = page;
        this.header = page.locator('.flex-1 > .hidden');
        this.homeMenu = page.getByRole('link', { name: 'HOME' });
        this.loginMenu = page.getByRole('link', { name: 'LOGIN' });
        this.formMenu = page.getByRole('link', { name: 'FORM' });
        this.tableMenu = page.getByRole('link', { name: 'TABLE' });
        this.tasksMenu = page.getByRole('link', { name: 'TASKS' });
        this.aboutMenu = page.getByRole('link', { name: 'SOBRE' });
        this.rule1 = page.getByText('Preencha todos os campos');
        this.rule2 = page.getByText('Escolha suas preferências de');
        this.rule3 = page.getByText('Após o envio do formulário,');
        this.title = page.getByRole('heading', { name: 'Cadastro' });
        this.name = page.getByText('Nome *');
        this.nameBox = page.getByPlaceholder('Digite seu nome');
        this.email = page.getByText('Email *');
        this.emailBox = page.getByPlaceholder('Digite seu e-mail');
        this.password = page.getByText('Senha *');
        this.passwordBox = page.getByPlaceholder('Digite sua senha');
        this.country = page.getByText('País *');
        this.countryBox = page.getByLabel('País *');
        this.genderTitle = page.getByText('Gênero *');
        this.gender1 = page.locator('label').filter({ hasText: 'Masculino' });
        this.gender2 = page.locator('label').filter({ hasText: 'Feminino' });
        this.gender3 = page.locator('label').filter({ hasText: 'Outro' });
        this.hobbieTitle = page.getByText('Lazer', { exact: true });
        this.hobbie1 = page.locator('label').filter({ hasText: 'Ler' });
        this.hobbie2 = page.locator('label').filter({ hasText: 'Viajar' });
        this.hobbie3 = page.locator('label').filter({ hasText: 'Video Games' });
        this.button = page.getByRole('button', { name: 'Enviar' });
        this.footer = page.getByText('© 2024 Bug Buster Mentoria.');
    }

    async navigateToForm() {
        await this.page.goto('/form');
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

    async validateRules() {
        await expect(this.rule1).toHaveText(PAGE_TEXT.form.instructions.firstRule);
        await expect(this.rule2).toHaveText(PAGE_TEXT.form.instructions.secondRule);
        await expect(this.rule3).toHaveText(PAGE_TEXT.form.instructions.thirdRule);
    }

    async validateFormBox() {
        await expect(this.title).toBeVisible();
        await expect(this.name).toBeVisible();
        await expect(this.nameBox).toBeVisible();
        await expect(this.email).toBeVisible();
        await expect(this.emailBox).toBeVisible();
        await expect(this.password).toBeVisible();
        await expect(this.passwordBox).toBeVisible();
        await expect(this.country).toBeVisible();
        await expect(this.countryBox).toBeVisible();
        await expect(this.genderTitle).toBeVisible();
        await expect(this.gender1).toBeVisible();
        await expect(this.gender2).toBeVisible();
        await expect(this.gender3).toBeVisible();
        await expect(this.hobbieTitle).toBeVisible();
        await expect(this.hobbie1).toBeVisible();
        await expect(this.hobbie2).toBeVisible();
        await expect(this.hobbie3).toBeVisible();
        await expect(this.button).toBeVisible();
    }

    async validateFooter() {
        await expect(this.footer).toHaveText(PAGE_TEXT.footer);
    }
}
module.exports = { Form };