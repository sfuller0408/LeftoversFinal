const expect = require("chai").expect;
const signIn = require("../static/signIn/signIn.js");

describe("do actions on signIn page", function() {
    describe("signIn as guest", function() {
        it("should return /search", function() {
            expect(signIn.loginAsGuest()).to.equal("/search");
        });
    });
    
    describe("go to createProfile page", function() {
        it("should return /createProfile", function() {
            expect(signIn.createProfile()).to.equal("/createProfile");
        });
    });
});