import 'dotenv/config';
import express from 'express';
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';
import Article from './models/models'
import bodyParser from'body-parser';

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
    let name = req.body.name;

    if (!name)
        return res.json({status: 'error', data: 'Invalid parameters'})

    Article.create({name: name}, (err, article) => {
        if(err)
            returnres.json({status: 'error', data: err})
        return res.json(article)
    })
})

app.listen(port, () =>
    console.log('Example app listening on port 8000!'),
);
