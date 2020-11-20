const cucumber = require("cucumber");
const expect = require("chai").expect;
const Given = cucumber.Given;
const When = cucumber.When;
const Then = cucumber.Then;
const display = require("../static/displayResults/results.js");

let label;
let recipeUrl;

Given("label and url of the recipe the user wants", function() {
    recipeUrl = "/result/testing/tsuleftoversfinal.herokuapp.com/";
});

let url;

When("the user selects a recipe", function() {
    url = display.send(input);
});

Then("{string} is returned as url", function(str) {
    expect(url).to.equal(str);
});