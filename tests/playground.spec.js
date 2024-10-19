const {test, expect} = require("@playwright/test");

test('Navigate to the Playground page', async({ page }) => {
    await page.goto('https://playground-drab-six.vercel.app/');
    await expect(page).toHaveTitle(/Playground/);
    await expect(page.locator('.flex-1 > .hidden')).toBeVisible();
    await expect(page.getByRole('link', { name: 'HOME' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'LOGIN' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'FORM' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'TABLE' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'TASKS' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'SOBRE' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Bug Buster Mentoria Banner' })).toBeVisible();
    await expect(page.getByText('Esta página foi desenvolvida')).toHaveText('Esta página foi desenvolvida pela equipe do Bug Buster Mentoria com o intuito educativo.');
    await expect(page.getByRole('heading', { name: 'Desafios Disponíveis:' })).toBeVisible();
    await expect(page.getByText('Login', { exact: true })).toBeVisible();
    await expect(page.getByText('Login', { exact: true })).toHaveText('Login');
    await expect(page.getByText('Formulários')).toHaveText('Formulários');
    await expect(page.getByText('Tabela dinâmica')).toHaveText('Tabela dinâmica');
    await expect(page.getByText('E muito mais!')).toHaveText('E muito mais!');
    await expect(page.getByText('© 2024 Bug Buster Mentoria.')).toHaveText('© 2024 Bug Buster Mentoria.');
});