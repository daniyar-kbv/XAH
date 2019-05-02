import mongoose from 'mongoose';
import Article from './article.model';
import User from './user.model'

var Schema = mongoose.Schema;

const articleLikeSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId, ref: User
    },
    article: {
        type: Schema.Types.ObjectId, ref: Article
    }
},{timestamps:true})

const articleLike = mongoose.model('articleLike', articleLikeSchema);

module.exports = articleLike;
