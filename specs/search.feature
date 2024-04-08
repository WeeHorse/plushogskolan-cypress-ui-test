Feature: Search
  As a user I want to be able to search terms on the site

  Scenario: As a prospective student I want to search for programs and courses
    Given I am on the home page
    And I accept cookies
    When I click the search icon
    And I search for "fullstackutvecklare"
    Then I get search results containing "fullstackutvecklare"

