Feature: Access Home/Search Page as guest
  Scenario: User does not have username and password
    Given user clicks "sign in as guest" button
    When loginAsGuest is called
    Then "/search" path is returned