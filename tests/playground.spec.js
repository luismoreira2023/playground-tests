const {test} = require("@playwright/test");
const { Homepage } = require("../pages/home");


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