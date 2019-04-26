import mongoose from 'mongoose';
import Comment from './comment';

var Schema = mongoose.Schema;

const Comment_like = mongoose.model('Comment_like', {
    comment: {
        type: Schema.Types.ObjectId, ref: Comment
    }
});

module.exports = Comment_like;
