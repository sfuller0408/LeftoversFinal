const express = require('express');
const app = express();
const axios = require("axios");

let port = process.env.PORT;
if (port == null || port == "") {
    port = 80;
}

// Create database to hold results
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database("./leftovers.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
    console.log("Connected to db");
    }
  }
);

// Class to handle all server req and responses.
class Leftovers {
    Leftovers() {}
    
    home(req, res) {
        res.render('search');
    }
    
    signIn(req, res) {
        res.render('signIn');
    }
    
    displayResults(req, res) {
        // Sets URL for axios API call
        let url = "https://edamam-recipe-search.p.rapidapi.com/search";
        // Creates an empty array to house all recipe objects
        let recipeList = [];
        
        axios({
            "method" : "GET",
            "url" : url,
            "headers" : {
                "content-type" :"application/octet-stream",
                "x-rapidapi-host" : "edamam-recipe-search.p.rapidapi.com",
                "x-rapidapi-key":"57bbc74ce3mshffb7ba97b1c27f0p18410bjsn9a2bb4c1f4e4",
                "useQueryString" : true,
            },
            // Sets the params for the API call
            "params" : {
                "q" : req.params.ingredients
            }
        }).then((response) => {
            // Captures the results.
            let resultList = response.data.hits;
            
            if(resultList.length > 0) {
                res.render('results', {"recipes": resultList});
            } else {
                res.render('search', {"errMessage": "No options found!"});
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    
    displayRecipe(req, res) {
        let url = req.params.recipeUrl;
        let label = req.params.recipeLabel;
        console.log(url);
        let args = {
            "recipeUrl": url,
            "recipeLabel": label
        };
        res.render('recipe', args);
    }
}

// Creates Leftovers object.
let server = new Leftovers();

// Set up the handlers for Node.js
app.use(express.static("static"));      // static files live in "static" folder
app.set('views', './views');            // set file to locate templates
app.set('view engine', 'pug');          // sets view engine as Pug

app.get('/search', (req, res) => {
    server.home(req, res);
});

app.get('/search/ingredients/:ingredients', (req, res) => {
    server.displayResults(req, res);
});

app.get('/search/ingredients/:ingredients/result/:recipeLabel/:recipeUrl',
    (req, res) => {
    server.displayRecipe(req, res);
});

app.get('/', (req, res) => {
    server.signIn(req, res);
});


// Start Express listening at the given port
app.listen(port, () => {
    console.log("App running at port=" + port);
});
