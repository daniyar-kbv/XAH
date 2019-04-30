const Comment_like = require('../models/comment_like.model.js');
const Comment = require('../models/comment.model');
const mongoose = require('mongoose');

// Create and Save a new Comment_like
exports.create = (req, res) => {
    // Validate request
    console.log(req.params.commentId);

    if(!req.body.user) {
        return res.status(400).send({
            message: "Comment_like content can not be empty"
        });
    }

    // Create a Comment_like
    const comment_like = new Comment_like({
        user: req.body.user,
        comment: req.body.comment
    });

    // Save Comment_like in the database
    comment_like.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Comment_like."
        });
    });
};

exports.findAll = (req, res) => {
    Comment_like.find({comment: req.body.comment})
    .then(comment_likes => {
        res.send(comment_likes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving comment_likes."
        });
    });
};

// Delete a comment_likes with the specified comment_likesId in the request
exports.delete = (req, res) => {
    Comment_like.findByIdAndRemove(req.params.comment_likesId)
    .then(comment_likes => {
        if(!comment_likes) {
            return res.status(404).send({
                message: "Comment_likes not found with id " + req.params.comment_likesId
            });
        }
        res.send({message: "Comment_likes deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Comment_likes not found with id " + req.params.comment_likesId
            });                
        }
        return res.status(500).send({
            message: "Could not delete comment_likes with id " + req.params.comment_likesId
        });
    });
};