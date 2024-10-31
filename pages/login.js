const { expect } = require("@playwright/test");
const { PAGE_TEXT } = require("../data/pageText");

class Login {

    constructor(page) {
        this.page = page;
        this.header = page.locator('.flex-1 > .hidden');
        this.homeMenu = page.getByRole('link', { name: 'HOME' });
        this.loginMenu = page.getByRole('link', { name: 'LOGIN' });
        this.formMenu = page.getByRole('link', { name: 'FORM' });
        this.tableMenu = page.getByRole('link', { name: 'TABLE' });
        this.tasksMenu = page.getByRole('link', { name: 'TASKS' });
        this.aboutMenu = page.getByRole('link', { name: 'SOBRE' });
        this.instructionsTitle = page.getByText('Instruções Login');
        this.rule1 = page.getByText('Quando utilizar username e');
        this.rule2 = page.getByText('Login ou senha incorretos');
        this.rule3 = page.getByText('Três senhas incorretas');
        this.loginTitle = page.getByRole('heading', { name: 'Login' });
        this.userTitle = page.getByText('Usuário', { exact: true });
        this.userBox = page.getByPlaceholder('Digite seu usuário');
        this.passwordTitle = page.getByText('Senha', { exact: true });
        this.passwordBox = page.getByPlaceholder('Digite sua senha');
        this.loginButton = page.getByRole('button', { name: 'Logar' });
        this.regularTitle = page.getByText('Conta Regular:');
        this.regularLogin = page.locator('p').filter({ hasText: /^Login: teste$/ }).getByRole('strong');
        this.regularLoginName = page.getByText('teste', { exact: true });
        this.regularPassword = page.getByText('Senha:').first();
        this.regularPasswordName = page.getByText('password123').first();
        this.blockedTitle = page.getByText('Conta Bloqueada:');
        this.blockedLogin = page.locator('p').filter({ hasText: 'Login: testeblock' }).getByRole('strong');
        this.blockedLoginName = page.getByText('testeblock');
        this.blockedPassword = page.getByText('Senha:').nth(1);
        this.blockedPasswordName = page.getByText('Senha: password123').nth(1);
        this.footer = page.getByText('© 2024 Bug Buster Mentoria.');
    }

    async navigateToLogin() {
        await this.page.goto('/login');
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
        await expect(this.instructionsTitle).toHaveText(PAGE_TEXT.login.instructions.title);
        await expect(this.rule1).toHaveText(PAGE_TEXT.login.instructions.firstRule);
        await expect(this.rule2).toHaveText(PAGE_TEXT.login.instructions.secondRule);
        await expect(this.rule3).toHaveText(PAGE_TEXT.login.instructions.thirdRule);
    }

    async validateSubmission() {
        await expect(this.loginTitle).toBeVisible();
        await expect(this.userTitle).toBeVisible();
        await expect(this.userBox).toBeVisible();
        await expect(this.passwordTitle).toBeVisible();
        await expect(this.passwordBox).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }

    async validateRegularAccount() {
        await expect(this.regularTitle).toBeVisible();
        await expect(this.regularLogin).toBeVisible();
        await expect(this.regularLoginName).toBeVisible();
        await expect(this.regularPassword).toBeVisible();
        await expect(this.regularPasswordName).toBeVisible();
    }

    async validateBlockedAccount() {
        await expect(this.blockedTitle).toBeVisible();
        await expect(this.blockedLogin).toBeVisible();
        await expect(this.blockedLoginName).toBeVisible();
        await expect(this.blockedPassword).toBeVisible();
        await expect(this.blockedPasswordName).toBeVisible();
    }

    async validateFooter() {
        await expect(this.footer).toHaveText(PAGE_TEXT.footer);
    }
}

module.exports = { Login };