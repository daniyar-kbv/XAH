import mongoose from 'mongoose';
import Article from './article.model';
import User from './user.model';

var Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    body: String,
    user: {
        type: Schema.Types.Object, ref: User
    },
    article: {
        type: Schema.Types.ObjectId, ref: Article
    }
},{timestamps:true})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
