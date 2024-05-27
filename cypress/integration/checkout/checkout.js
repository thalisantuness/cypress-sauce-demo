import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the user logs in', () => {
  cy.doLogin()
  cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html')
})

And('the user goes to the cart with the chosen product', () => {
    cy.chooseProduct()
    cy.url().should('eq','https://www.saucedemo.com/v1/cart.html')
})

And('the user proceeds to checkout', () => {
  cy.contains("CHECKOUT").click()
  cy.url().should('eq','https://www.saucedemo.com/v1/checkout-step-one.html')
})

When('the user completes the checkout', () => {
  cy.fillCheckout()
  cy.url().should('eq','https://www.saucedemo.com/v1/checkout-step-two.html')
  cy.get("a").contains("FINISH").click()
  cy.url().should('eq','https://www.saucedemo.com/v1/checkout-complete.html')
})

Then('the user sees the account completion message', () => {
  cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible')
  cy.url().should('eq','https://www.saucedemo.com/v1/checkout-complete.html')
})

