const cucumber = require("cucumber");
const expect = require("chai").expect;
const Given = cucumber.Given;
const When = cucumber.When;
const Then = cucumber.Then;
const signIn = require("../static/signIn/signIn.js");

Given("user clicks \"sign in as guest\" button",
        function() {
    // nothing is done here because a mock button press is not
    // needed to call the loginAsGuest function.
});

let result;

When("loginAsGuest is called", function() {
    result = signIn.loginAsGuest();
});

Then("{string} path is returned", function(str) {
    expect(result).to.equal(str);
});