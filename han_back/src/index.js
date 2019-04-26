import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Article from './models/article'
import Category from './models/category'
import bodyParser from'body-parser';

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

app.get('/articles', (req, res) => {
    Article.find({}, (err, articles) =>{
        if(err){
            return res.json({status: 'error', data: err})
        }
        return res.json(articles)
    })
});

app.post('/articles', (req, res) => {
    let title = req.body.title;
    let body = req.body.body;
    let imageUrl = req.body.imageUrl;
    let datePublished = req.body.datePublished;
    let category = req.body.category;

    if (!title || !body || !imageUrl || !datePublished || !category)
        return res.json({status: 'error', data: 'Invalid parameters'})

    Article.create({title: title, body: body, imageUrl: imageUrl, datePublished: datePublished, category: category}, (err, article) => {
        if(err)
            return res.json({status: 'error', data: err})
        return res.json(article)
    })
})
app.get('/categories', (req, res) => {
    Category.find({}, (err, categories) =>{
        if(err){
            return res.json({status: 'error', data: err})
        }
        return res.json(categories)
    })
});
app.post('/categories', (req, res) => {
    let name = req.body.name;

    if (!name)
        return res.json({status: 'error', data: 'Invalid parameters'})

    Category.create({name: name}, (err, category) => {
        if(err)
            return res.json({status: 'error', data: err})
        return res.json(category)
    })
})

app.listen(port, () =>
    console.log('Example app listening on port 8000!'),
);
