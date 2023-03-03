// @ts-check
const { test, expect } = require('@playwright/test');


test.describe('Catalog',() => {
    //Visit homepage before each test
  test.beforeEach( async ({page})=>{
    await page.goto('/')
  });

//User can see all categories on the homeapge
test('List categories in homepage', async ({ page }) => {
    await expect(page.getByRole('list').filter({has : page.locator('.menu-item-link') })).toBeVisible()
});
//User can view all the categories
test('List all categories', async ({ page }) => {
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await expect(page.locator('.category-list-box')).toHaveCount(19)
});

//User can add product to the cart from its card
test('Add product to cart @productCard', async ({ page }) => {
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.add-to-cart').click()
    await page.waitForLoadState('domcontentloaded')
    await expect(page.locator('.product-count').first()).toHaveText('1')

});

//User can change product count in the product card
test('Change product count @productCard', async ({page}) => {
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.add-to-cart').click()
    await page.waitForLoadState('domcontentloaded')
    await expect(page.locator('.product-count').first()).toHaveText('1')
    await expect(page.locator('.product-item').first().getByRole('textbox')).toHaveValue('1')
    await page.locator('.product-item').first().getByRole('button').nth(2).click()
    await expect(page.locator('.product-item').first().getByRole('textbox')).toHaveValue('2')
    await page.locator('.product-item').first().getByRole('button').nth(1).click()
    await expect(page.locator('.product-item').first().getByRole('textbox')).toHaveValue('1')

});

//User can remove product from cart in product card
test('Delete product from cart @productCard', async ({page})=>{
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.add-to-cart').click()
    await page.waitForLoadState('domcontentloaded')
    await expect(page.locator('.product-count').first()).toHaveText('1')
    await expect(page.locator('.product-item').first().getByRole('textbox')).toHaveValue('1')
    await page.locator('.product-item').first().getByRole('button').nth(1).click()
    await expect(page.locator('.product-count')).toBeHidden()

})
    
//User can add product to cart from product frame
test('Add product to cart @productFrame', async ({page})=>{
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.product-title').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('#productDetail')).toBeVisible()
    await page.locator('#productDetail').focus()
    await page.getByRole('button', { name: 'Add to cart' }).click()
    await expect(page.locator('#productDetail').getByRole('textbox')).toHaveValue('1 pc')
    await page.getByRole('button', { name: '+' }).click()
    await expect(page.locator('#productDetail').getByRole('textbox')).toHaveValue('2 pc')
    await page.getByRole('button', { name: '-' }).click()
    await expect(page.locator('#productDetail').getByRole('textbox')).toHaveValue('1 pc')
    await page.locator('.input-group > button').click()
    await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible()


})

//User can add product to Saved products from product frame
test('Add product to SAVED @productFrame',async ({page})=>{
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.product-title').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('#productDetail')).toBeVisible()
    await page.locator('#productDetail').focus()
    await page.locator('#productDetail').getByText('Favorite products').click()
    await page.getByRole('button').filter({ hasText: '×' }).click()
    await page.locator('li:nth-child(2)').first().click()
    await expect(page.locator('div').filter({ hasText: 'Add to cart' }).first()).toBeVisible()
})

//User can share product link
test('Share product link @productFrame', async ({page})=>{
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.product-title').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('#productDetail')).toBeVisible()
    await page.locator('#productDetail').focus()
    await page.waitForTimeout(2000)
    await page.locator('.share-link-button').click()
    await expect(page.locator('#productDetail').getByRole('textbox').inputValue()).toBeDefined()
   
})
})