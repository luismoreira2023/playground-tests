const {test} = require("@playwright/test");
const { Login } = require("../pages/login");

test('Login page', async({ page }) => {
    const loginPage = new Login(page);
    await loginPage.navigateToLogin();
    await loginPage.validateTitle('Playground page');
    await loginPage.validateHeader();
    await loginPage.validateMenu();
    await loginPage.validateInstructions();
    await loginPage.validateSubmission();
    await loginPage.validateRegularAccount();
    await loginPage.validateBlockedAccount();
    await loginPage.validateFooter();
});