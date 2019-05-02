import middleware from '../../middleware';

module.exports = (app) => {
    const articles = require('../controllers/article.controller.js');

    app.post('/articles', middleware.checkToken, middleware.checkPermission('ReadWrite'), articles.create);

    app.get('/articles', articles.findAll);

    app.get('/articles/:articleId', articles.findOne);

    app.put('/articles/:articleId', middleware.checkToken, middleware.checkPermission('ReadWrite'), articles.update);

    app.delete('/articles/:articleId', middleware.checkToken, middleware.checkPermission('ReadWrite'), articles.delete);
}