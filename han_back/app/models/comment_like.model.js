import mongoose from 'mongoose';
import Comment from './comment.model';
import User from './user.model'

var Schema = mongoose.Schema;

const commentLikeSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId, ref: User
    },
    comment: {
        type: Schema.Types.ObjectId, ref: Comment
    }
},{timestamps:true})

const commentLike = mongoose.model('commentLike', commentLikeSchema);

module.exports = commentLike;
