const Article_like = require('../models/article_like.model.js');
const Article = require('../models/article.model');

import User from "../models/user.model";
import middleware from '../../middleware';

exports.create = (req, res) => {
    Article.findById(req.params.articleId).then(article => {
        User.findById(req.decoded.userId).then(user => {
            Article_like.find( {user: user, article: article}, function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Article_like."
                    });
                }
                if (!results.length) {
                    const article_like = new Article_like({
                        user: user,
                        article: article
                    });
                
                    article_like.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the Article_like."
                        });
                    });
                }
                if(results.length){
                    res.status(500).send({
                        message: "Like is done"
                    });
                }
            })
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Article not found"
        });
    });
};

exports.findAll = (req, res) => {
    Article_like.find({article: req.body.article})
    .then(article_likes => {
        res.send(article_likes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving article_likes."
        });
    });
};

exports.delete = (req, res) => {
    Article_like.findById(req.params.article_likesId).then(article_likes_found => {
        if(!article_likes_found) {
            return res.status(404).send({
                message: "Article_likes not found with id " + req.params.article_likesId
            });
        }
        User.findById(req.decoded.userId).then(user => {
            let str1 = new String(article_likes_found.user);
            let str2 = new String(user._id);
            let buf1 = Buffer.from(str1);
            let buf2 = Buffer.from(str2);
            console.log(buf1.equals(buf2));
            if (middleware.comparison(article_likes_found.user, user._id)){
                Article_like.findByIdAndDelete(req.params.article_likesId).then( article_likes_del => {
                    res.send({message: "Article_likes deleted successfully!"});
                })
            }
            else{
                return res.status(404).send({
                    message: "Not your articleLike"
                });
            }
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Article_likes not found with id " + req.params.article_likesId
            });                
        }
        return res.status(500).send({
            message: "Could not delete article_likes with id " + req.params.article_likesId
        });
    });
};