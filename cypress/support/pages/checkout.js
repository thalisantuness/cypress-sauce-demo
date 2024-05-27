
Cypress.Commands.add('doLogin', () => {
    cy.visit('/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()
})

Cypress.Commands.add('chooseProduct', () => {
    cy.contains("ADD TO CART").first().click()
    cy.get("#shopping_cart_container").click()
})

Cypress.Commands.add('fillCheckout', () => {
cy.get('[data-test="firstName"]').type("Thalis")
cy.get('[data-test="lastName"]').type("da Silva")
cy.get('[data-test="postalCode"]').type("97542590")
cy.contains("CONTINUE").click()
})