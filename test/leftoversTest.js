const chai = require("chai");
const expect = chai.expect;
const request = require("request");
const chaiHttp = require("chai-http");
const Leftovers = require("../leftovers.js").Leftovers;

let url = "https://tsuleftoversfinal.herokuapp.com";

chai.use(chaiHttp);

// leftovers server unit tests.
describe("Render pages from Heroku", function() {
    // set timeout for asynchronous calls to prevent timeout fails on first call.
    this.timeout(20000);
    
    // tests get function and signIn(req, res) for signIn page.
    describe("render Sign In Page", function() {
        it("should render page with status of 200",
            function(done) {
                chai.request(url)
                .get("/")
                .end(function(err, res) {
                    expect(res.status).to.equal(200);
                    done();
                });
            }
        );
            
        it("should render page with username, password, and sign in as guest elements",
            function(done) {
                chai.request(url)
                .get("/")
                .end(function(err, res) {
                    expect(res.text).to.have.string("username: ");
                    expect(res.text).to.have.string("password: ");
                    expect(res.text).to.have.string("sign in as guest");
                    done();
                });
            }
        );
    });
    
    // tests get function and home(req, res) for home/search page.
    describe("render Home/Search Page", function() {
        it("should render page with status of 200",
            function(done) {
                chai.request(url)
                .get("/search")
                .end(function(err, res) {
                    expect(res.status).to.equal(200);
                    done();
                });
            }
        );
        
        it("should render page with label and heading/button value elements",
            function(done) {
                chai.request(url)
                .get("/search")
                .end(function(err, res) {
                    expect(res.text)
                        .to
                        .have
                        .string("Enter the Ingredient you would like to include:");
                    expect(res.text).to.have.string("Search");
                    done();
                });
            }
        );
    });
    
    // tests get function and displayResults(req, res) for results page.
    describe("render Results Page", function() {
        it("should render page with status of 200",
            function(done) {
                chai.request(url)
                .get("/search/ingredients/apples")
                .end(function(err, res) {
                    expect(res.status).to.equal(200);
                    done();
                });
            }
        );
        
        it("should render page with title/heading and multiple \"css card\" classes",
            function(done) {
                chai.request(url)
                .get("/search/ingredients/apples")
                .end(function(err, res) {
                    expect(res.text)
                        .to
                        .have
                        .string("Results");
                    expect(res.text).to.have.string("class=\"card\"");
                    done();
                });
            }
        );
        
        it("should return to Search page if no results are found",
            function(done) {
                chai.request(url)
                .get("/search/ingredients/noExpectedResults")
                .end(function(err, res) {
                    // renders searchPage again with error message attached.
                     expect(res.text)
                        .to
                        .have
                        .string("Enter the Ingredient you would like to include:");
                    expect(res.text).to.have.string("Search");
                    done();
                });
            }
        );
    });
});