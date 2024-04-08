import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the home page', () => {
  cy.visit("/")
  cy.get('.site_logo[alt="Plushögskolan AB"]').should('exist')
});

Given('I accept cookies', () => {
  cy.get('#cc-b-acceptall').click()
  cy.get('#cc-b-acceptall').should('not.exist')
});

When('I click the search icon', () => {
  cy.get('.search_icon > .fal').click()
});

When('I search for {string}', (searchString) => {
  cy.get('#s').type(searchString + '{enter}')
});

Then('I get search results containing {string}', (a) => {
  // TODO: implement step
});