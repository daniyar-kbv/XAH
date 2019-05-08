const Article = require('../models/article.model');

import User from '../models/user.model'
import middleware from '../../middleware';

exports.create = (req, res) => {
    if(!req.body.title || !req.body.body || !req.body.category) {
        return res.status(400).send({
            message: "Invalid parameters"
        });
    }

    User.findById(req.decoded.userId).then(user => {
        const article = new Article({
            title: req.body.title,
            body: req.body.body,
            imageUrl: req.body.imageUrl,
            category: req.body.category,
            user: user
        });
    
        article.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Article."
            });
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "No such user"
        });
    })
}

exports.findAll = (req, res) => {
    Article.find()
    .then(articles => {
        console.log('get articles success');
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
        console.log('get article success')
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

exports.findNum = (req, res) => {
    Article.find()
    .then(articles => {
        console.log('get articles success');
        res.send(articles[req.params.num]);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving articles."
        });
    });
}

exports.update = (req, res) => {
    if(!req.body.title || !req.body.body) {
        return res.status(400).send({
            message: "Invalid parameters"
        });
    }

    User.findById(req.decoded.userId).then(user => {
        Article.findById(req.params.articleId).then(article => {
            if (middleware.comparison(user._id, article.user)){
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
            }
            else{
                return res.status(500).send({
                    message: "Article is not yours"
                });
            }
        })
    })
    
};

exports.delete = (req, res) => {
    User.findById(req.decoded.userId).then(user => {
        Article.findById(req.params.articleId).then(article => {
            if (middleware.comparison(user._id, article.user)){
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
            }
            else{
                return res.status(500).send({
                    message: "Article is not yours"
                });
            }
        })
    });
};