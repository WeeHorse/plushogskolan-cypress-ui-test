Feature: Search
  As a user I want to be able to search terms on the site

  Scenario: As a prospective student I want to search for programs and courses
    Given I am on the home page
    And I accept cookies
    When I click the search icon
    And I search for "fullstackutvecklare"
    Then I get search results containing "fullstackutvecklare"

  Scenario: When I follow a search result link I expect to find relevant content
    Given I have a search result containing "fullstackutvecklare"
    When I follow the search result link
    Then I should see "fullstackutvecklare" in the top quarter of the content


