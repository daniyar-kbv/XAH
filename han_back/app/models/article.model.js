import mongoose from 'mongoose';
import Category from './category.model';
import User from './user.model';


var Schema = mongoose.Schema;

const articleSchema = new mongoose.Schema({
    title: String,
    body: String,
    imageUrl: String,
    category: {
        type: Schema.Types.ObjectId, ref: Category
    },
    user: {
        type: Schema.Types.ObjectId, ref: User
    }
},{timestamps:true})

articleSchema.pre('remove', function(next) {
    Comment.remove({article_id: this._id}).exec();
    next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
