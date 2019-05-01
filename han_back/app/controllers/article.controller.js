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

exports.findOne = (req, res) => {
    Article.findById(req.params.articleId)
    .then(article => {
        if(!article) {
            return res.status(404).send({
                message: "Article not found with id " + req.params.articleId
            });            
        }
        res.send(article);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Article not found with id " + req.params.articleId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving article with id " + req.params.articleId
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.title || !req.body.body) {
        return res.status(400).send({
            message: "Invalid parameters"
        });
    }

    Article.findByIdAndUpdate(req.params.articleId, {
        title: req.body.title,
        body: req.body.body
    }, {new: true})
    .then(article => {
        if(!article) {
            return res.status(404).send({
                message: "Article not found with id " + req.params.articleId
            });
        }
        res.send(article);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Article not found with id " + req.params.articleId
            });                
        }
        return res.status(500).send({
            message: "Error updating article with id " + req.params.articleId
        });
    });
};

exports.delete = (req, res) => {
    Article.findByIdAndRemove(req.params.articleId)
    .then(article => {
        if(!article) {
            return res.status(404).send({
                message: "Article not found with id " + req.params.articleId
            });
        }
        res.send({message: "Article deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Article not found with id " + req.params.articleId
            });                
        }
        return res.status(500).send({
            message: "Could not delete article with id " + req.params.articleId
        });
    });
};