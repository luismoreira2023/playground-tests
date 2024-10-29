const {test} = require("@playwright/test");
const { Homepage } = require("../pages/home");
const { Login } = require("../pages/login");
const { Form } = require("../pages/form");
const { Table } = require("../pages/table");


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

test('Form page', async({ page }) => {
    const formPage = new Form(page);
    await formPage.navigateToForm();
    await formPage.validateTitle('Playground page');
    await formPage.validateHeader();
    await formPage.validateMenu();
    await formPage.validateRules();
    await formPage.validateFormBox();
    await formPage.validateFooter();
});

test('Table page', async({ page }) => {
    const tablePage = new Table(page);
    await tablePage.navigateToTable();
    await tablePage.validateTitle('Playground page');
    await tablePage.validateHeader();
    await tablePage.validateMenu();
    await tablePage.validateInstructions();
    await tablePage.validateComponents();
    await tablePage.validateFooter();
});