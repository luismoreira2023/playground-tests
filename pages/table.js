const { expect } = require("@playwright/test");
const { PAGE_TEXT } = require("../data/pageText");

class Table {
    constructor(page) {
        this.page = page;
        this.header = page.locator('.flex-1 > .hidden');
        this.homeMenu = page.getByRole('link', { name: 'HOME' });
        this.loginMenu = page.getByRole('link', { name: 'LOGIN' });
        this.formMenu = page.getByRole('link', { name: 'FORM' });
        this.tableMenu = page.getByRole('link', { name: 'TABLE' });
        this.tasksMenu = page.getByRole('link', { name: 'TASKS' });
        this.aboutMenu = page.getByRole('link', { name: 'SOBRE' });
        this.rule1 = page.getByText('Veja a tabela de personagens');
        this.rule2 = page.getByText('A ordem dos personagens muda');
        this.rule3 = page.getByText('São exibidas imagem, nome,');
        this.image = page.getByRole('cell', { name: 'Image' });
        this.name = page.getByRole('cell', { name: 'Name' });
        this.house = page.getByRole('cell', { name: 'House' });
        this.birthDate = page.getByRole('cell', { name: 'Date of Birth' });
        this.actor = page.getByRole('cell', { name: 'Actor' });
        this.footer = page.getByText('© 2024 Bug Buster Mentoria.');
    }

    getCharImageLocator(character) {
        return this.page.getByRole('img', { name: character });
    }

    getCharNameLocator(character) {
        return this.page.locator('#tableCharacterName' + character.replace(' ', ''));
    }

    getHouseNameLocator(character) {
        return this.page.locator('#tableCharacterHouse' + character.replace(' ', ''));
    }

    getBirthDateLocator(dateOfBirth) {   
        return this.page.getByRole('cell', { name: dateOfBirth });
    }

    getActorNameLocator(actor) {
        return this.page.getByRole('cell', { name: actor });
    }

    async navigateToTable() {
        await this.page.goto('/table');
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
        await expect(this.rule1).toHaveText(PAGE_TEXT.table.instructions.firstRule);
        await expect(this.rule2).toHaveText(PAGE_TEXT.table.instructions.secondRule);
        await expect(this.rule3).toHaveText(PAGE_TEXT.table.instructions.thirdRule);
    }

    async validateComponents() {
        await expect(this.image).toBeVisible();
        await expect(this.name).toBeVisible();
        await expect(this.house).toBeVisible();
        await expect(this.birthDate).toBeVisible();
        await expect(this.actor).toBeVisible();
    }

    async validateFooter() {
        await expect(this.footer).toHaveText(PAGE_TEXT.footer);
    }

    async validateCharacterImage(hpCharacter) {
        await expect(this.getCharImageLocator(hpCharacter)).toBeVisible();
    }

    async validateCharacterName(hpCharacter) {
        await expect(this.getCharNameLocator(hpCharacter)).toHaveText(hpCharacter);
    }

    async validateHouseName(hpCharacter, house) {
        await expect(this.getHouseNameLocator(hpCharacter)).toHaveText(house);
    }

    async validateBirthDate(dateOfBirth) {
        if (dateOfBirth === null) {
            console.log('No date of birth');
        } else {
            await expect(this.getBirthDateLocator(dateOfBirth)).toHaveText(dateOfBirth);
        }
    }

    async validateActorName(actor) {
        await expect(this.getActorNameLocator(actor)).toHaveText(actor);
    }
}
module.exports = { Table };