const expect = require("chai").expect;
const create = require("../static/createProfile/createProfile.js");

describe("do actions on createProfile Page", function() {
    describe("send function is called with proper arguments",
            function() {
        it("should return /register/username/:username/password/:password", function() {
            expect(create.send("John", "12345"))
                .to
                .equal("/register/username/John/password/12345");
        });
    });
});