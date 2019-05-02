import middleware from "../../middleware"

module.exports = (app) => {
    const roles = require('../controllers/role.controller.js');

    app.post('/roles', middleware.checkToken, middleware.checkPermission("Admin"), roles.create);
    app.get('/roles/:noteId', roles.findOne);
}