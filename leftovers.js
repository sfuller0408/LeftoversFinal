const express = require('express');
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
    port = 80;
}

function home(req, res) {
    res.render('search');
}

// Set up the handlers for Node.js
app.use(express.static("static"));      // static files live in "static" folder
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    home(req, res);
});

// Start Express listening at the given port
app.listen(port, () => {
    console.log("App running at port=" + port);
});
