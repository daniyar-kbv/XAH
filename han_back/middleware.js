let jwt = require('jsonwebtoken');
const config = require('./config.js');

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token.startsWith('JWT ')) {
        // Remove Bearer from string
        token = token.slice(4, token.length);
    }

    if (token) {
        console.log(token);
        jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.json({
            success: false,
            message: 'Token is not valid'
            });
        } else {
            req.decoded = decoded;
            next();
        }
        });
    } else {
        return res.json({
        success: false,
        message: 'Auth token is not supplied'
        });
    }
    // try{
    //     const token = req.headers.authorization.split(" ")[1]
    //     jwt.verify(token, key.tokenKey, function (err, payload) {
    //         console.log(payload)
    //         if (payload) {
    //             user.findById(payload.userId).then(
    //                 (doc)=>{
    //                     req.user=doc;
    //                     next()
    //                 }
    //             )
    //         } else {
    //         next()
    //         }
    //     })
    // }catch(e){
    //     next()
    // }
};

module.exports = {
  checkToken: checkToken
}