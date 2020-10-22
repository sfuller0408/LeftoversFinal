const express = require('express');
const app = express();
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
  res.render('results');
}

// Set up the handlers for Node.js
app.use(express.static("static"));      // static files live in "static" folder
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    home(req, res);
});

app.get('/search/ingredient/:ingredient', (req, res) => {
    home(req, res);
});

app.get('/signIn', (req, res) => {
    signIn(req, res);
});

app.get('/display', (req, res) => {
  displayResults(req, res);
});

// Start Express listening at the given port
app.listen(port, () => {
    console.log("App running at port=" + port);
});
