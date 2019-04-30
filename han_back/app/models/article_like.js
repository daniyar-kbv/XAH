import mongoose from 'mongoose';
import Article from './article';

var Schema = mongoose.Schema;

const Article_like = mongoose.model('Article_like', {
    article: {
        type: Schema.Types.ObjectId, ref: Article
    }
});

module.exports = Article_like;