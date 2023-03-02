// @ts-check
const { test, expect } = require('@playwright/test');

// test.beforeEach(async ({ page, context }) => {

// });  

test.describe('Authentication',() => {

  test.beforeEach( async ({page})=>{
    await page.goto('/')
  });

test('Register', async ({ page }) => {
    await page.goto('/')
});

test('Log in', async ({ page }) => {
    await page.goto('/')
});

test('Log out', async ({ page }) => {
  await page.locator('.profile-btn').hover()
  await page.getByText('Logout').click()
  await page.waitForLoadState('networkidle')
  await expect(page.getByText('Войти')).toBeVisible()
});

})