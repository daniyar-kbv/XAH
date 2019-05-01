module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.post('/register', users.create);
    
}