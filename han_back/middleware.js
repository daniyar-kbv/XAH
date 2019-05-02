let jwt = require('jsonwebtoken');
const config = require('./config.js');

import User from './app/models/user.model';
import Role from './app/models/role.model';

let checkToken = (req, res, next) => {
    if (!(req.headers['x-access-token'] || req.headers['authorization'])) {
        return res.json({
            success: false,
            message: 'Auth token is not supplied to the header'
            });
    }
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('JWT ')) {
        token = token.slice(4, token.length);
    }

    if (token) {
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
};

let checkPermission = function checkPermission(role){
    return (req, res, next) => {
        User.findById(req.decoded.userId, function (err, user) {
            Role.findById(user.role, function(err, users_role){
                if (users_role.name == role)
                    next();
                else {
                    res.status(403).json({message: "Forbidden"});
                }
            })
        });
    }
}

function comparison(obj1, obj2){
    return (Buffer.from(new String(obj1)).equals(Buffer.from(new String(obj2))))
}

module.exports = {
  checkToken: checkToken,
  checkPermission: checkPermission,
  comparison: comparison
}