const expect = require("chai").expect;
const request = require("request");

describe("Leftovers app response on Heroku Server", function() {
    
    describe("SignIn page responds properly", function(){
        let url = "https://tsuleftoversfinal.herokuapp.com/";
        
        it("should return status 200", function(done) {
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
    
    describe("Home/Search page responds properly", function(){
        let url = "https://tsuleftoversfinal.herokuapp.com/search";
        
        it("should return status 200", function(done) {
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
    
    describe("Results page responds properly", function(){
        let url = "https://tsuleftoversfinal.herokuapp.com/search/ingredients/apple";
        
        it("should return status 200", function(done) {
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
    
    describe("Recipe page responds properly", function(){
        let url = "https://tsuleftoversfinal.herokuapp.com/search/ingredients/apple" +
            "/result/Apple%20Fennel%20Granita/" +
            "www.edamam.com%2Frecipe%2Fapple-fennel-granita-" +
            "2bdefb60f86458dfa15d9b3bc74a001f%2Fapple";
        
        it("should return status 200", function(done) {
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
});