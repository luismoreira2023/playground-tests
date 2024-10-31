const {test} = require("@playwright/test");
const { Login } = require("../pages/login");

test('Login succesful', async({ page }) => {
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
    await loginPage.fillUser();
    await loginPage.fillPassword();
    await loginPage.clickLogin();
    await loginPage.success();
    await loginPage.validateLoggedText();
    await loginPage.clickLogout();
});

test('Blocked login', async({ page }) => {
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
    await loginPage.blockedUser();
    await loginPage.fillPassword();
    await loginPage.clickLogin();
    await loginPage.blockedAccount();
});

test('FAILED!', async({ page }) => {
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
    await loginPage.failedUser();
    await loginPage.fillPassword();
    await loginPage.clickLogin();
    await loginPage.failedAttempt();
});

test('Wrong password attempt', async({ page }) => {
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
    await loginPage.fillUser();
    await loginPage.failedPassword();
    await loginPage.clickLogin();
    await loginPage.wrongPassword();
});