const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require('./app/routes/role.route.js')(app);
require('./app/routes/comment.route.js')(app);
require('./app/routes/category.route.js')(app);
require('./app/routes/comment_like.route.js')(app);
require('./app/routes/article.route.js')(app);
require('./app/routes/user.route.js')(app);
require('./app/routes/login.route.js')(app);


// let jwt = require('jsonwebtoken');
// var decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2M5YjZhMjgxMzI2MjFkNWU4MTM4MWIiLCJpYXQiOjE1NTY3MjY2NTF9.Ccyoy_WXmSP1iKi6PlamH0JzLzJJ9mE2VnooDDPek-k", 'shhhhh');
// console.log(decoded.foo) // bar
// jwt.verify("asd", 'shhhhh', function(err, decoded) {
//     console.log("token") // bar
// });
// listen for requests
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});