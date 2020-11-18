const expect = require("chai").expect;
const results = require("../static/displayResults/results.js");

describe("do actions on results page", function() {
    describe("choose recipe to display", function() {
        it("should return /results/:input", function() {
            expect(results.send("TESTING!!")).to.equal("results/TESTING!!");
        });
    });
});