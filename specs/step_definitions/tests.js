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

Then('I get search results containing {string}', (searchString) => {
  cy.get('#main > header.page-header').should('contain', searchString)
  cy.get('article').each(($el) => {
    // cy.wrap($el.text()).contains(searchString, { matchCase: false })
    let text = cy.wrap($el.text().toLowerCase())
    text.should('contain', searchString.toLowerCase())
  })
});

Given('I have a search result containing {string}', (searchString) => {
  cy.get('article').each(($el) => {
    // cy.wrap($el.text()).contains(searchString, { matchCase: false })
    let text = cy.wrap($el.text().toLowerCase())
    text.should('contain', searchString.toLowerCase())
  })
});

When('I follow the search result link', () => {
  cy.get('article:nth-child(2) > .entry-summary > .arrow-container > .site__cta-color--100 > .fal').click()
});

Then('I should see {string} in the top quarter of the content', (searchString) => {
  cy.get('#cc-b-acceptall').click()
  cy.get('body').then(($el) => {
    let text = $el.text()
    text = text.toLowerCase().slice(0, Math.floor(text.length / 4))
    cy.wrap(text).should('contain', searchString.toLowerCase())
  })
});