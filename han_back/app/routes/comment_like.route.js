import middleware from "../../middleware"

module.exports = (app) => {
    const comment_like = require('../controllers/comment_like.controller.js');

    app.post('/comment_like/:commentId', middleware.checkToken, comment_like.create);

    app.get('/comment_like', comment_like.findAll);

    app.delete('/comment_like/:comment_likesId', middleware.checkToken, comment_like.delete);
}