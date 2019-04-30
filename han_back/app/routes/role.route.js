module.exports = (app) => {
    const roles = require('../controllers/role.controller.js');

    app.post('/roles', roles.create);
    app.get('/roles/:noteId', roles.findOne);
}