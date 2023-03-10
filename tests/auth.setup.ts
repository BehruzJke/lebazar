// import { test as setup} from '@playwright/test' ;

// //Initiate path variable to save authentication for later use
// const authfile = 'playwright/.auth/user.json';

// setup('Authenticate', async ({page}) => {
//     //Log in to lebezar.uz using OTP
//     await page.goto('https://lebazar.uz/');
//     await page.getByText('Войти').click();
//     await page.getByPlaceholder('Phone number').fill('+998901192977');
//     await page.pause();
//     //Save authenticated state to our path
//     await page.context().storageState({path: authfile})
// })