import { test as setup} from '@playwright/test' ;

const authfile = 'playwright/.auth/user.json';

setup('Authenticate', async ({page}) => {
    await page.goto('https://lebazar.uz/');
    await page.getByText('Войти').click();
    await page.getByPlaceholder('Phone number').fill('+998901192977');
    await page.pause();
    await page.context().storageState({path: authfile})
})