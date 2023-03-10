// @ts-check
const {test, expect} = require('@playwright/test')

test.describe('Checkout',()=>{
    //Visit homepage before each test
    test.beforeEach(async ({page})=>{
      await  page.goto('/')
    })
    //Order products with scheduled delivery
    test('Scheduled delivery', async ({page})=>{
        
    })
    //Order products with delivery ASAP
    test('ASAP delivery',async ({page})=>{

    })
    //Order with self-pickup
    test('Self-pickup', async ({page})=>{

    })
})