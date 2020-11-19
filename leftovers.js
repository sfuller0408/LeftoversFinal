const express = require("express");
const app = express();
const axios = require("axios");

let port = process.env.PORT;
if (port == null || port == "") {
    port = 80;
}

// Create database to hold results
const sqlite3 = require("sqlite3").verbose();
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

// Create tables if it does not exist
db.run(
    'CREATE TABLE IF NOT EXISTS Leftovers(username, password, allergies)',
    [],
    (err) => {
    if(err) {
      console.error(err.message);
    } else {
      console.log("Table created");
    }
});

function createProfile(req, res) {
    // Sends user information into the database
    let username = req.params.username;
    let password = req.params.password;
    // TODO() add ability to input allergies and filter results by allergies
    let allergies = null;
      
    db.serialize(() => {
        db.run(
            'INSERT INTO Leftovers(username, password, allergies) VALUES(?, ?, ?)',
            [username, password, allergies],
            [],
            (err) => {
                if(err) {
                    console.error(err.message);
                } else {
                    console.log("Inserted user information = username: "
                        + username + ", password: " + password + ", allergies: " 
                        + allergies + " into database.");
                }
            }
        );
    });
    res.render("signIn");
  }
  
function signIn(req, res) {
    let user = req.params.username;
    let passwordAttempt = req.params.password;
    
    // Retrieves the password for the given user and tests if the password entered
    // is correct.
    db.get(
        'SELECT password pass FROM Leftovers WHERE username = "' + user + '"', 
        [], 
        (err, row) => {
        if (err) {
            console.error(err.message);
        } else {
            if (row.pass == passwordAttempt) {
                res.render("search");
            } else {
                res.render("signIn", {"status": "The password you entered was incorrect."});
            }
        }
    });
}

function displayResults(req, res) {
    // Sets URL for axios API call
    let url = "https://edamam-recipe-search.p.rapidapi.com/search";
    // Creates an empty array to house all recipe objects
    let recipeList = [];
    
    // Calls Edamam API using params given by user
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
            res.render("results", {"recipes": resultList});
        } else {
            res.render("search", {"status": "No options found! Please try again!"});
        }
    }).catch((error) => {
        console.error(error);
    });
}
    
function displayRecipe(req, res) {
    let url = req.params.recipeUrl;
    let label = req.params.recipeLabel;

    let args = {
        "recipeUrl": url,
        "recipeLabel": label
    };
    res.render("recipe", args);
}
// Set up the handlers for Node.js
app.use(express.static("static"));      // static files live in "static" folder
app.set("views", "./views");            // set file to locate templates
app.set("view engine", "pug");          // sets view engine as Pug

app.get("/search", (req, res) => {
    res.render("search");
});

app.get("/:username/:password/search", (req, res) => {
    signIn(req, res);
});

app.get("/search/ingredients/:ingredients", displayResults);

app.get("/search/ingredients/:ingredients/result/:recipeLabel/:recipeUrl",
        displayRecipe);

app.get("/createProfile", (req, res) => {
    res.render("createProfile");
});

app.get("/register/username/:username/password/:password", createProfile);

app.get("/", (req, res) => {
    res.render("signIn");
});

// Start Express listening at the given port
app.listen(port, () => {
    console.log("App running at port=" + port);
});
