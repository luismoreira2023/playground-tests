const { test } = require('@playwright/test');
const { Login } = require('../pages/login');
const { TEST_ACCOUNT } = require('../data/accounts');

test('Login Succesful', async ({ page }) => {
  const user = TEST_ACCOUNT.regular;
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
  await loginPage.fillUser(user.user);
  await loginPage.fillPassword(user.password);
  await loginPage.clickLogin();
  await loginPage.success();
  await loginPage.validateLoggedText();
  await loginPage.clickLogout();
});

test('Login Failed - User Blocked ', async ({ page }) => {
  const user = TEST_ACCOUNT.blocked;
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
  await loginPage.fillUser(user.user);
  await loginPage.fillPassword(user.password);
  await loginPage.clickLogin();
  await loginPage.blockedAccount();
});

test('Login Failed - User not found', async ({ page }) => {
  const user = TEST_ACCOUNT.invalidUser;
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
  await loginPage.fillUser(user.user);
  await loginPage.fillPassword(user.password);
  await loginPage.clickLogin();
  await loginPage.failedAttempt();
});

test('Login Failed - Wrong password attempt', async ({ page }) => {
  const user = TEST_ACCOUNT.wrongPass;
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
  await loginPage.fillUser(user.user);
  await loginPage.fillPassword(user.password);
  await loginPage.clickLogin();
  await loginPage.wrongPassword();
});
