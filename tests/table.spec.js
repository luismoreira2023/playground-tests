const { test } = require('@playwright/test');
const { Table } = require('../pages/table');
const { HP_CHARACTERS } = require('../data/characters');

HP_CHARACTERS.forEach((character) => {
  test(`Validate table for character: ${character.name}`, async ({ page }) => {
    const tablePage = new Table(page);
    await tablePage.navigateToTable();
    await tablePage.validateTitle('Playground page');
    await tablePage.validateHeader();
    await tablePage.validateMenu();
    await tablePage.validateInstructions();
    await tablePage.validateComponents();
    await tablePage.validateFooter();
    await tablePage.validateCharacterImage(character.name);
    await tablePage.validateCharacterName(character.name);
    await tablePage.validateHouseName(character.name, character.house);
    await tablePage.validateBirthDate(character.name, character.dateOfBirth);
    await tablePage.validateActorName(character.actor);
  });
});
