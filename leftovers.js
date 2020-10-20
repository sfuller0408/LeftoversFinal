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

// Create tables if it doesn't already exist
// db.run(
  // 'CREATE TABLE IF NOT EXISTS ')

// Set up the handlers for Node.js
app.use(express.static("static"));      // static files live in "static" folder

//app.get();

// Start Express listening at the given port
app.listen(port, () => {
    console.log("App running at port=" + port);
});
