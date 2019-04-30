const Comment = require('../models/comment.model.js');

// Create and Save a new Comment
exports.create = (req, res) => {
    // Validate request
    if(!req.body.body)  {
        return res.status(400).send({
            message: "Comment content can not be empty"
        });
    }

    // Create a Comment
    const comment = new Comment({
        body: req.body.body,
        user: req.body.user,
        article: req.body.article
    });

    // Save Comment in the database
    comment.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Comment."
        });
    });
};

// Retrieve and return all comments from the database.
exports.findAll = (req, res) => {
    Comment.find()
    .then(comments => {
        res.send(comments);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving comments."
        });
    });
};

// Find a single comment with a commentId
exports.findOne = (req, res) => {
    Comment.findById(req.params.commentId)
    .then(comment => {
        if(!comment) {
            return res.status(404).send({
                message: "Comment not found with id " + req.params.commentId
            });            
        }
        res.send(comment);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Comment not found with id " + req.params.commentId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving comment with id " + req.params.commentId
        });
    });
};

// Delete a comment with the specified commentId in the request
exports.delete = (req, res) => {
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
};
