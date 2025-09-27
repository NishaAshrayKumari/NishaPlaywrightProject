import { locatorsData } from '../locators';

const {test, expect} = require('@playwright/test');
test('register new user', async ({ page }) => {
    await page.goto('/');
    console.log(await page.title());
    await expect(page).toHaveTitle("Automation Exercise");
    await page.click(locatorsData.signupLogin);
    await page.fill(locatorsData.signupName, "Nisha");
    await page.fill(locatorsData.signupEmail, "nisha@mail.com");
    await page.click(locatorsData.signupButton);
});