import { locatorsData } from "../locators"; 
const { test, expect } = require('@playwright/test');
test('login existing user', async ({ page }) => {
    await page.goto('/');
    console.log(await page.title());
    await expect(page).toHaveTitle("Automation Exercise");
    await page.click(locatorsData.signupLogin);
    await page.fill(locatorsData.loginEmail, process.env.EMAIL);
    await page.fill(locatorsData.loginPwd, process.env.PASSWORD);
    await page.click(locatorsData.loginButton);
    await page.getByText('Logged in as Nisha').isVisible();
});