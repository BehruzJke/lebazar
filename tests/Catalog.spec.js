// @ts-check
const { test, expect } = require('@playwright/test');


test.describe('Catalog',() => {

  test.beforeEach( async ({page})=>{
    await page.goto('/')
  });

test('List categories in homepage', async ({ page }) => {
    await expect(page.getByRole('list').filter({has : page.locator('.menu-item-link') })).toBeVisible()
});

test('List all categories', async ({ page }) => {
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    // await page.waitForLoadState('networkidle')
    await expect(page.locator('.category-list-box')).toHaveCount(19)
});

test('Add product to cart @productCard', async ({ page }) => {
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.add-to-cart').click()
    await page.waitForLoadState('domcontentloaded')
    await expect(page.locator('.product-count').first()).toHaveText('1')

});

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