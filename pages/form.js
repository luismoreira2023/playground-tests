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
        this.country = page.getByRole('link', { name: 'FORM' });
        this.countryBox = page.getByLabel('País *');
        this.genderTitle = page.getByText('Gênero *');
        this.genders = {
            Masculino: page.getByLabel('Masculino'),
            Feminino: page.getByLabel('Feminino'),
            Outro: page.getByLabel('Outro')
        };
        this.hobbieTitle = page.getByText('Lazer', { exact: true });
        this.hobbies = {
            Ler: page.getByLabel('Ler'),
            Jogos: page.getByLabel('Jogos'),
            Televisão: page.getByLabel('Televisão'),
            Viajar: page.getByLabel('Viajar'),
            Esportes: page.getByLabel('Esportes'),
            Cantar: page.getByLabel('Cantar'),  
        }
        this.submitButton = page.getByRole('button', { name: 'Enviar' });
        this.footer = page.getByText('© 2024 Bug Buster Mentoria.');
        this.successMessage = page.getByText('Sucesso!');
        this.successInfo = page.getByText('O formulário foi enviado com');
        this.nameFailure = page.getByText('O campo nome é obrigatório.');
        this.emailFailure = page.getByText('O campo email é obrigatório.');
        this.passwordFailure = page.getByText('O campo senha é obrigatório.');
        this.countryFailure = page.getByText('O campo país é obrigatório.');
        this.genderFailure = page.getByText('O campo gênero é obrigatório.');
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
        await expect(this.hobbieTitle).toBeVisible();
        await expect(this.submitButton).toBeVisible();
    }

    async validateFooter() {
        await expect(this.footer).toHaveText(PAGE_TEXT.footer);
    }

    async fillName(name) {
        await this.nameBox.fill(name);
    }

    async fillEmail(email) {
        await this.emailBox.fill(email);
    }

    async fillPassword(password) {
        await this.passwordBox.fill(password);
    }

    async selectCountry(countryName) {
        await this.country.click();
        await this.countryBox.selectOption(countryName);
    }

    async selectGender(gender) {
        await this.genders[gender].click();
    }

    async selectHobbies(hobbies) {
        for (const hobby of hobbies) {
            await this.selectHobby(hobby);
        }
    }

    async selectHobby(hobby) {
        await this.hobbies[hobby].click();
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async submitSuccess() {
        await expect(this.successMessage).toBeVisible();
        await expect(this.successInfo).toHaveText('O formulário foi enviado com sucesso.');
    }

    async submitFailures() {
        await expect(this.nameFailure).toBeVisible();
        await expect(this.emailFailure).toBeVisible();
        await expect(this.passwordFailure).toBeVisible();
        await expect(this.countryFailure).toBeVisible();
        await expect(this.genderFailure).toBeVisible();
    }
}
module.exports = { Form };