const expect = require("chai").expect;
const search = require("../static/home/search.js");

describe("do actions on search page", function() {
    describe("conduct search", function() {
        it("should return /search/ingredients/:ingredients", function() {
            expect(search.doSearch("TESTING!!")).to.equal("/search/ingredients/TESTING!!");
        });
    });
    
    // Tests that the search function returns nothing in the case of a blank search input.
    describe("conduct blank search", function() {
        it("should return to exit out of function and stay in page", function() {
            expect(search.doSearch("")).to.equal(undefined);
        });
    });
});