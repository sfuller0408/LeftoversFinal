const cucumber = require("cucumber");
const expect = require("chai").expect;
const Given = cucumber.Given;
const When = cucumber.When;
const Then = cucumber.Then;
const search = require("../static/home/search.js");

let input;

Given("user inputs onions", function() {
    input = "onions";
});

let url;

When("the user clicks submit", function() {
    url = search.doSearch(input);
});

Then("{string} is returned as the url", function(str) {
    expect(url).to.equal(str);
});