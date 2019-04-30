import mongoose from 'mongoose';
import Comment from './comment.model';
import User from './user.model'

var Schema = mongoose.Schema;

const Comment_like = mongoose.model('Comment_like', {
    user:{
        type: Schema.Types.ObjectId, ref: User
    },
    comment: {
        type: Schema.Types.ObjectId, ref: Comment
    }
});

module.exports = Comment_like;
