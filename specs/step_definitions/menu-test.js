import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I click on the menu item {string}', (Name) => {
  cy.contains('a', Name).click();
});

Then('I should be on the {string} page', (URL) => {
  // TODO: implement step
});

Then('see {string} in the loaded page', (Name) => {
  // TODO: implement step
});