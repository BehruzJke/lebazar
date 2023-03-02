// @ts-check
const {test, expect} = require('@playwright/test')

test.describe('Cart',()=>{
test.beforeEach(async ({page})=>{
    await page.goto('/')
})

test('Deleteall the products from the cart', async ({page})=>{
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.add-to-cart').click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('button', { name: '1' }).click()
    await expect(page.getByRole('button').filter({hasText:'Checkout'})).toBeVisible()
})

test('Change count of the product in cart', async ({page}) => {
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.add-to-cart').click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '' }).click()
    await expect(page.getByText('2pc')).toBeVisible()
})
    

test('Delete product from the cart', async ({page})=>{
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.add-to-cart').click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('button', { name: '1' }).click()
    await page.getByText('Choose all').click()
    await page.getByText('Delete').click()
    await page.getByRole('button', { name: 'Yes' }).click()
    await page.locator('#header').getByRole('button').nth(1).click()
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('button').filter({hasText:'Checkout'})).not.toBeInViewport()

})

test('Confirm the order', async ({page})=>{
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.add-to-cart').click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('button', { name: '1' }).click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('button').filter({hasText:'Checkout'}).click()
    await page.waitForLoadState('domcontentloaded')
})
})