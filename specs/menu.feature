Feature: Menu

  Scenario Outline: Test menu items
    Given I am on the home page
    And I accept cookies
    When I click on the menu item "<Name>"
    Then I should be on the "<URL>" page
    And see "<Name>" in the loaded page

    Examples:
      | Name      | URL           |
      | Om oss    | /om-oss       |
      | Samarbeta | /samarbeten   |
      | Kontakt   | /kontakta-oss |
