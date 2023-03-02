// @ts-check
const {test, expect} = require('@playwright/test')

test.describe('Checkout',()=>{
    test.beforeEach(async ({page})=>{
        page.goto('/')
    })

    test('Scheduled delivery', async ({page})=>{
        
    })

    test('ASAP delivery',async ({page})=>{

    })

    test('Self-pickup', async ({page})=>{

    })
})