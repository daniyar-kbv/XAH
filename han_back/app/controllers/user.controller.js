const User = require('../models/user.model');
const express=require('express');
const jwt=require('jsonwebtoken');
const user=require('../models/user.model');
const key=require("../../key");

const app=express();

app.use(require('body-parser').json());

exports.create = (req, res) => {

    const DEFAULT_ROLE = "5cc9c6ecca0cf71ff3d9e484";

    if(!req.body.username || !req.body.password) {
        return res.status(400).send({
            message: "Invalid parameters"
        });
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role || DEFAULT_ROLE
    });

    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
}

exports.login = (req,res) =>{
    user.findOne({username:req.body.username}).then((user)=>{
            user.comparePassword(req.body.password,(err,isMatch)=>{
                if(isMatch){
                    var token=jwt.sign({userId:user.id}, key.tokenKey);
                    res.status(200).json({
                        userId:user.id,
                        username: user.username,
                        token
                    })
                }
                else{
                    res.status(400).json({message:'Invalid Password/Username'});
                }
            })
    }).catch((err)=>{
        res.status(400).json({message:'Invalid Password/Username'});
    })
};