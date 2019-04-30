import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from'body-parser';

import Article from './models/article';
import Role from './models/role';
import User from './models/user';
import Comment from './models/comment';
import CommentLike from './models/comment_like';

// import comment_get from './api/comment';
// import comment_post from './api/comment'

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
    let name = req.body.name;

    if (!name)
        return res.json({status: 'error', data: 'Invalid parameters'})

    Article.create({name: name}, (err, article) => {
        if(err)
            return res.json({status: 'error', data: err})
        return res.json(article)
    })
});

app.get('/users', (req, res) => {
    User.find({}, (err, users) =>{
        if(err){
            return res.json({status: 'error', data: err})
        }
        return res.json(users)
    })
});

app.post('/users', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.role;

    if (!username || !password || !role)
        return res.json({status: 'error', data: 'Invalid parameters'})

    User.create({username: username, password: password, role: role}, (err, user) => {
        if(err)
            return res.json({status: 'error', data: err})
        return res.json(user)
    })
});

// app.delete('comments/:id', (req, res) => {
//     let id = req.params._id;
//
//     Comment.deleteOne({_id: id}, (err) => {
//         if (err)
//             return res.json({status: 'error', data: err});
//
//         return res.json({status: 'ok'})
//     })
// });

app.get('/comments', (req, res) => {
    Comment.find({}, (err, comments) =>{
        if(err){
            return res.json({status: 'error', data: err})
        }
        return res.json(comments)
    })
});

app.post('/comments', (req, res) => {
    let body = req.body.body;
    let date = req.body.date_published;
    let user = req.body.user;
    let article = req.body.article;

    if (!body || !date || !user || !article)
        return res.json({status: 'error', data: 'Invalid parameters'})

    Comment.create({body: body, date_published: date, user: user, article: article}, (err, comment) => {
        if(err)
            return res.json({status: 'error', data: err})
        return res.json(comment)
    })
});

app.delete('/comments/:id',
    (req, res) => {
        let id = req.params._id;

        Comment.deleteOne({_id: id}, (err) => {
            if (err)
                return res.json({status: 'error', data: err});

            return res.json({status: 'ok'})
        })
    });

app.get('/comments_like', (req, res) => {
    CommentLike.find({}, (err, comments_like) =>{
        if(err){
            return res.json({status: 'error', data: err})
        }
        return res.json(comments_like)
    })
});

app.post('/comments_like', (req, res) => {
    let comment = req.body.comment;

    if (!comment)
        return res.json({status: 'error', data: 'Invalid parameters'})

    CommentLike.create({comment: comment}, (err, user) => {
        if(err)
            return res.json({status: 'error', data: err})
        return res.json(user)
    })
});

app.listen(port, () =>
    console.log('Example app listening on port 8000!'),
);
