const Article = require('../models/article.model');

exports.create = (req, res) => {
    if(!req.body.title || !req.body.body || !req.body.datePublished || !req.body.category || !req.body.user) {
        return res.status(400).send({
            message: "Invalid parameters"
        });
    }

    const article = new Article({
        title: req.body.title,
        body: req.body.body,
        imageUrl: req.body.imageUrl,
        datePublished: req.body.datePublished,
        category: req.body.category,
        user: req.body.user
    });

    article.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Article."
        });
    });
}

exports.findAll = (req, res) => {
    Article.find()
    .then(articles => {
        res.send(articles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving articles."
        });
    });
};