Feature: Search brands
  As a user I want to search information about plushögskolans brands

  Scenario Outline: Search brands
    Given I am on the home page
    And I accept cookies
    When I click the search icon
    And I search for "<searchTerm>"
    Then I get search results containing "<searchTerm>"

    Examples:
      | searchTerm         |
      | teknikhögskolan    |
      | vårdyrkeshögskolan |
      | affärshögskolan    |

