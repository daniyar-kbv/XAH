module.exports = (app) => {
    const roles = require('../controllers/role.controller.js');

    // Retrieve all Roles
    app.get('/roles/:noteId', roles.findOne);
}