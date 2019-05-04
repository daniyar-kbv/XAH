const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./app/routes/role.route.js')(app);
require('./app/routes/comment.route.js')(app);
require('./app/routes/category.route.js')(app);
require('./app/routes/comment_like.route.js')(app);
require('./app/routes/article.route.js')(app);
require('./app/routes/user.route.js')(app);
require('./app/routes/article.route.js')(app);
require('./app/routes/article_like.route')(app);

// listen for requests
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});

// TODO: on delete cascade