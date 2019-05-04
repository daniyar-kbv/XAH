let middleware = require('../../middleware');

module.exports = (app) => {
    const comments = require('../controllers/comment.controller.js');

    // app.post('/comments/:articleId', middleware.checkToken, comments.create);
    app.post('/comments/:articleId', comments.create);
    app.get('/comments/:articleId', comments.findAll);
    app.delete('/comments/:commentId', middleware.checkToken, comments.delete);
}