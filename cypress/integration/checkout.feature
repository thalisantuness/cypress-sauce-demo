Feature: As a customer, I want to purchase a product

  Scenario: Complete purchase with checkout
    Given the user logs in
    And the user goes to the cart with the chosen product
    And the user proceeds to checkout
    When the user completes the checkout
    Then the user sees the account completion message
