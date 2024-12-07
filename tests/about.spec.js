const { test } = require("@playwright/test");
const { About } = require("../pages/about");
const { DESTINATION_URL } = require("../data/urls");

test('Validate about page', async ({ page }) => {
    const aboutPage = new About(page);
    await aboutPage.navigateToAbout();
    await aboutPage.validateHeader('Sobre Mim');
    await aboutPage.validateTitle('Playground page');
    await aboutPage.validateMenu();
    await aboutPage.validateDescription();
    await aboutPage.validateLinks();
    await aboutPage.validateBugBusterLink();
    await aboutPage.validateFooter();
});

test('Open LinkedIn profile', async({ page }) => {
    const aboutPage = new About(page);
    await aboutPage.navigateToAbout();
    await aboutPage.linkedInProfile(DESTINATION_URL.linkedIn);
});

test('Open GitHub profile', async ({ page }) => {
    const aboutPage = new About(page);
    await aboutPage.navigateToAbout();
    await aboutPage.gitHubProfile(DESTINATION_URL.gitHub);
});

test('Send mail to me', async ({ page }) => {
    const aboutPage = new About(page);
    await aboutPage.navigateToAbout();
    await aboutPage.myEmail(DESTINATION_URL.email);
});

test('Open Medium page', async ({ page }) => {
    const aboutPage = new About(page);
    await aboutPage.navigateToAbout();
    await aboutPage.mediumPage(DESTINATION_URL.medium);
});

test('Open Bug Buster page', async ({ page }) => {
    const aboutPage = new About(page);
    await aboutPage.navigateToAbout();
    await aboutPage.bugBuster(DESTINATION_URL.bugBuster);
});