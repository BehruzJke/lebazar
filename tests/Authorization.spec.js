// // @ts-check
// const { test, expect } = require('@playwright/test');

// // test.beforeEach(async ({ page, context }) => {

// // });  

// test.describe('Authentication',() => {

//   test.beforeEach( async ({page})=>{
//     await page.goto('/')
//   });

// test('Register', async ({ page }) => {
//   await page.goto('https://lebazar.uz/');
//   await page.getByText('Войти').click();
//   await page.getByRole('option',{name: 'Uzbekistan'}).click()
//   await page.getByText('United States +1').click()
//   await page.getByPlaceholder('Phone number').fill('8643412215')
//   await page.getByText('Recaptcha requires verification. I\'m not a robotreCAPTCHAPrivacy - Terms').focus()
//   await page.getByRole('checkbox', { name: 'I\'m not a robot' }).click({force:true})
//   await page.pause()
// });

// test('Log in', async ({ page }) => {
//     await page.goto('/')
// });

// test('Log out', async ({ page }) => {
//   await page.locator('.profile-btn').hover()
//   await page.getByText('Logout').click()
//   await page.waitForLoadState('networkidle')
//   await expect(page.getByText('Войти')).toBeVisible()
// });

// })