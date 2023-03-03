# Test automation framework for olcha.uz

## Project overview

Lebazar.uz is an online shop where you can buy groceries from supermarket chain Makro. Your products will be delivered to you based on the option you choose ( either scheduled or fast delivery or self-pickup)

## Framework overview

The framework uses Playwright version 1.31.1 for test automation. Some tests require authentication via OTP which is not possible 

to automate, so you have authorize yourself before anything and save it to the authenticated user state. Each test that require 

authenticated user state will use that in following tests.

It contains all the smoke functionalities of the platform. 

## Installation 

### Pre requisites :

You should have node.js and npm installed on your system

### Install node packages:

`npm install`

or

`yarn install`

### Execute tests:

`npx playwright test`

or

`yarn playwright test`

### Run tests in GUI 

`npx playwright test --headed`

or

`yarn playwright test --headed`
