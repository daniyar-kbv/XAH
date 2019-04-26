import mongoose from 'mongoose';
import Category from './category'

var Schema = mongoose.Schema;

const Article = mongoose.model('Article', {
    title: String,
    body: String,
    imageUrl: String,
    datePublished: Date,
    category: {
        type: Schema.Types.ObjectId, ref: Category
    }
});

module.exports = Article;
