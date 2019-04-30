import mongoose from 'mongoose';
import Category from './category'
import User from './user'

var Schema = mongoose.Schema;

const Article = mongoose.model('Article', {
    title: String,
    body: String,
    imageUrl: String,
    datePublished: Date,
    category: {
        type: Schema.Types.ObjectId, ref: Category
    },
    user: {
        type: Schema.Types.ObjectId, ref: User
    }
});

module.exports = Article;
