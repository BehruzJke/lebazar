import { test as setup} from '@playwright/test' ;

//Declare a variable to save state of a authenticated user with a product in the cart
const product = 'playwright/.auth/product.json';

setup('Authenticate', async ({page}) => {
    await page.getByRole('heading', { name: 'Korzinka.uz View more ' }).getByRole('link', { name: 'View more' }).click()
    await page.locator('.category-list-box').first().getByRole('link').first().click()
    await page.locator('.product-item').first().locator('.add-to-cart').click()
    await page.waitForLoadState('domcontentloaded')
    await page.context().storageState({path: product})
})