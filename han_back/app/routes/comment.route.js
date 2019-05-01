let middleware = require('../../middleware');

module.exports = (app) => {
    const comments = require('../controllers/comment.controller.js');

    // Create a new comment
    app.post('/comments', comments.create);

    // Retrieve all comments
    app.get('/comments', middleware.checkToken, comments.findAll);

    // Retrieve a single comment with commentId
    app.get('/comments/:commentId', comments.findOne);

    // Delete a comment with commentId
    app.delete('/comments/:commentId', comments.delete);
}