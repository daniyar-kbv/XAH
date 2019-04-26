import mongoose from 'mongoose';

const Article = mongoose.model('Article', {
    name: String
});

module.exports = Article
