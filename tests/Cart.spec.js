// @ts-check
const {test, expect} = require('@playwright/test')

test.describe('Cart',()=>{
//visit homepage before each test
test.beforeEach(async ({page})=>{
    await page.goto('/')
})
//User can delete all products from the cart
test('Delete all the products from the cart', async ({page})=>{
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.add-to-cart').click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('button', { name: '1' }).click()
    await expect(page.getByRole('button').filter({hasText:'Checkout'})).toBeVisible()
})

//User can change the count of products in the cart
test('Change count of the product in cart', async ({page}) => {
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.add-to-cart').click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '' }).click()
    await expect(page.getByText('2pc')).toBeVisible()
})
    
//User can remove 1 product from the cart
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
    await page.waitForLoadState('domcontentloaded')
    await expect(page.getByRole('button').filter({hasText:'Checkout'})).not.toBeInViewport()

})

//User can confirm the order
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