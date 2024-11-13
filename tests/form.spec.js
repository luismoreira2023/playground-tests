const { test } = require("@playwright/test");
const { Form } = require("../pages/form");
const { REGISTER_ACCOUNT } = require('../data/register');

test('Create American user', async ({ page }) => {
    const user = REGISTER_ACCOUNT.american;
    const formPage = new Form(page);
    await formPage.navigateToForm();
    await formPage.validateTitle('Playground page');
    await formPage.validateHeader();
    await formPage.validateMenu();
    await formPage.validateRules();
    await formPage.validateFormBox();
    await formPage.validateFooter();
    await formPage.fillName(user.name);
    await formPage.fillEmail(user.email);
    await formPage.fillPassword(user.password);
    await formPage.selectCountry(user.country);
    await formPage.selectGender(user.gender);
    await formPage.selectHobbies(user.hobbies);
    await formPage.submitForm();
    await formPage.submitSuccess();
});

test('Create Canadian user', async ({ page }) => {
    const user = REGISTER_ACCOUNT.canadian;
    const formPage = new Form(page);
    await formPage.navigateToForm();
    await formPage.validateTitle('Playground page');
    await formPage.validateHeader();
    await formPage.validateMenu();
    await formPage.validateRules();
    await formPage.validateFormBox();
    await formPage.validateFooter();
    await formPage.fillName(user.name);
    await formPage.fillEmail(user.email);
    await formPage.fillPassword(user.password);
    await formPage.selectCountry(user.country);
    await formPage.selectGender(user.gender);
    await formPage.selectHobbies(user.hobbies);
    await formPage.submitForm();
    await formPage.submitSuccess();
});

test('Create Mexican user', async ({ page }) => {
    const user = REGISTER_ACCOUNT.mexican;
    const formPage = new Form(page);
    await formPage.navigateToForm();
    await formPage.validateTitle('Playground page');
    await formPage.validateHeader();
    await formPage.validateMenu();
    await formPage.validateRules();
    await formPage.validateFormBox();
    await formPage.validateFooter();
    await formPage.fillName(user.name);
    await formPage.fillEmail(user.email);
    await formPage.fillPassword(user.password);
    await formPage.selectCountry(user.country);
    await formPage.selectGender(user.gender);
    await formPage.selectHobbies(user.hobbies);
    await formPage.submitForm();
    await formPage.submitSuccess();
});

test('Create Brazilian user', async ({ page }) => {
    const user = REGISTER_ACCOUNT.brazilian;
    const formPage = new Form(page);
    await formPage.navigateToForm();
    await formPage.validateTitle('Playground page');
    await formPage.validateHeader();
    await formPage.validateMenu();
    await formPage.validateRules();
    await formPage.validateFormBox();
    await formPage.validateFooter();
    await formPage.fillName(user.name);
    await formPage.fillEmail(user.email);
    await formPage.fillPassword(user.password);
    await formPage.selectCountry(user.country);
    await formPage.selectGender(user.gender);
    await formPage.selectHobbies(user.hobbies);
    await formPage.submitForm();
    await formPage.submitSuccess();
});

test('Create Portuguese user', async ({ page }) => {
    const user = REGISTER_ACCOUNT.portuguese;
    const formPage = new Form(page);
    await formPage.navigateToForm();
    await formPage.validateTitle('Playground page');
    await formPage.validateHeader();
    await formPage.validateMenu();
    await formPage.validateRules();
    await formPage.validateFormBox();
    await formPage.validateFooter();
    await formPage.fillName(user.name);
    await formPage.fillEmail(user.email);
    await formPage.fillPassword(user.password);
    await formPage.selectCountry(user.country);
    await formPage.selectGender(user.gender);
    await formPage.selectHobbies(user.hobbies);
    await formPage.submitForm();
    await formPage.submitSuccess();
});

test('Send form with no data', async ({ page }) => {
    const formPage = new Form(page);
    await formPage.navigateToForm();
    await formPage.validateTitle('Playground page');
    await formPage.validateHeader();
    await formPage.validateMenu();
    await formPage.validateRules();
    await formPage.validateFormBox();
    await formPage.validateFooter();
    await formPage.submitForm();
    await formPage.submitFailures();
});

test('Send invalid email', async ({ page }) => {
    const formPage = new Form(page);
    await formPage.navigateToForm();
    await formPage.validateTitle('Playground page');
    await formPage.validateHeader();
    await formPage.validateMenu();
    await formPage.validateRules();
    await formPage.validateFormBox();
    await formPage.validateFooter();
    await formPage.fillEmail('luisfilipe');
    await formPage.submitForm();
});