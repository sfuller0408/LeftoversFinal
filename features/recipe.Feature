Feature: See chosen Recipe
  Scenario: User decides one which recipe the would like
    Given label and url of the recipe the user wants
    When the user selects a recipe
    Then "/results/result/testing/tsuleftoversfinal.herokuapp.com/"
    is returned as url