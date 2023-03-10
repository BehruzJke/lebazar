// @ts-check
const {test, expect} = require('@playwright/test')

test.describe('Languages',()=>{
    //Visit homepage before each test
    test.beforeEach(async ({page})=>{
       await page.goto('/')
    })
    //Check english localization
    test('English', async ({page})=>{
      await page.locator('.is-dropdown-submenu-parent > a').hover()
      await page.getByRole('listitem').filter({ hasText: 'English' }).first().click()
      await expect(page.getByText('Shipping and payment')).toBeDefined()
      await expect(page.getByText('How to return')).toBeDefined()
      await expect(page.getByText('About us')).toBeDefined()
    })

    //Test russian localization
    test('Russian', async ({page})=>{
      await page.locator('.is-dropdown-submenu-parent > a').hover()
      await page.getByRole('link', { name: 'Русский' }).click()
      await expect(page.getByText('Войти')).toBeVisible()
      await expect(page.getByText('Доставка и оплата')).toBeDefined()
      await expect(page.getByText('Как вернуть')).toBeDefined()
      await expect(page.getByText('О нас')).toBeDefined()
    })
    //Test uzbek localization
    test('Uzbek', async ({page})=>{
      await page.locator('.is-dropdown-submenu-parent > a').hover()
      await page.getByRole('link', { name: 'O‘zbekcha' }).click()
      await expect(page.getByText(`Yetkazib berish va to'lov`)).toBeDefined()
      await expect(page.getByText('Qanday qaytish kerak')).toBeDefined()
      await expect(page.getByText('Biz haqimizda')).toBeDefined()
      })
})