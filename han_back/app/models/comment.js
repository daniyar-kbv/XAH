import mongoose from 'mongoose';
import Article from './article';
import User from './user';

var Schema = mongoose.Schema;

const Comment = mongoose.model('Comment', {
    body: String,
    date_published: Date,
    user: {
        type: Schema.Types.ObjectId, ref: User
    },
    article: {
        type: Schema.Types.ObjectId, ref: Article
    }
});

module.exports = Comment;
