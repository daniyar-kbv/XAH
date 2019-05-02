import middleware from "../../middleware"

module.exports = (app) => {
    const article_like = require('../controllers/article_like.controller.js');

    app.post('/article_like/:articleId', middleware.checkToken, article_like.create);

    app.get('/article_like', article_like.findAll);

    app.delete('/article_like/:article_likesId', middleware.checkToken, article_like.delete);
}