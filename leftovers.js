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

function home(req, res) {
    res.render('search');
}

function signIn(req, res) {
    res.render('signIn');
}

function displayResults(req, res) {
    let url = "https://edamam-recipe-search.p.rapidapi.com/search";
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
        "params" : {
            "q" : req.params.ingredients
        }
    }).then((response) => {
        let resultList = response.data.hits;
     res.render('results', {"recipes": resultList});
    }).catch((error) => {
        console.error(error);
    });
}

function displayRecipe(req, res) {
    let url = req.params.recipeUrl;
    let label = req.params.recipeLabel;
    console.log(url);
    let args = {
        "recipeUrl": url,
        "recipeLabel": label
    };
    res.render('recipe', args);
}

// Set up the handlers for Node.js
app.use(express.static("static"));      // static files live in "static" folder
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/search', (req, res) => {
    home(req, res);
});

app.get('/search/ingredients/:ingredients', (req, res) => {
    displayResults(req, res);
});

app.get('/search/ingredients/:ingredients/result/:recipeLabel/:recipeUrl',
    (req, res) => {
        displayRecipe(req, res);
});

app.get('/', (req, res) => {
    signIn(req, res);
});


// Start Express listening at the given port
app.listen(port, () => {
    console.log("App running at port=" + port);
});
