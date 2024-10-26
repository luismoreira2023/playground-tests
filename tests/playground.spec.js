const {test} = require("@playwright/test");
const { Homepage } = require("../pages/home");
const { Login } = require("../pages/login");


test('Navigate to the Playground page', async({ page }) => {
    const homepage = new Homepage(page);
    await homepage.navigateToHomepage();
    await homepage.validateTitle('Playground page');
    await homepage.validateHeader();
    await homepage.validateMenu();
    await homepage.validateBanner();
    await homepage.validateDescription();
    await homepage.validateChallenges();
    await homepage.validateFooter();
});

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