Feature: Allow user to search for ingredients
  Scenario: User searches for recipe by ingredients
    Given user inputs onions
    When the user clicks submit
    Then "/search/ingredients/onions" is returned as the url