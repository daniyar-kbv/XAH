const Comment = require('../models/comment.model.js');
const express=require('express');
const app=express();

import User from "../models/user.model";
import Article from "../models/article.model";
import middleware from '../../middleware';

exports.create = (req, res) => {
    if(!req.body.body)  {
        return res.status(400).send({
            message: "Comment content can not be empty"
        });
    }

    User.findById(req.decoded.userId).then(user => {
        Article.findById(req.params.articleId).then(article => {
            if (article != ''){
                const comment = new Comment({
                    body: req.body.body,
                    user: user,
                    article: article
                });
    
                comment.save()
                .then(data => {
                    res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Comment."
                    });
                });
            }
            else{
                res.status(500).send({
                    message: err.message || "Article not found"
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Comment."
            });
        })
    }).catch(err => {
        
    })
};

exports.findAll = (req, res) => {
    Article.findById(req.params.articleId).then(article => {
        Comment.find({article: article}).then(comments => {
            res.send(comments);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving comments."
            });
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "No such article"
        });
    })
};

exports.delete = (req, res) => {
    User.findById(req.decoded.userId).then(user => {
        Comment.findById(req.params.commentId).then(comment_found => {
            if (middleware.comparison(comment_found.user, user._id)){
                Comment.findByIdAndRemove(req.params.commentId)
                .then(comment => {
                    if(!comment) {
                        return res.status(404).send({
                            message: "Comment not found with id " + req.params.commentId
                        });
                    }
                    res.send({message: "Comment deleted successfully!"});
                }).catch(err => {
                    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                        return res.status(404).send({
                            message: "Comment not found with id " + req.params.commentId
                        });                
                    }
                    return res.status(500).send({
                        message: "Could not delete comment with id " + req.params.commentId
                    });
                });
            }
            else{
                return res.status(500).send({
                    message: "Comment is not yours"
                });
            }
            
        }).catch(err => {
            res.status(500).send({
                message: err.message || "No such comment"
            });
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "No such user"
        });
    })
};
