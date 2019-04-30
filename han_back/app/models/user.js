import mongoose from 'mongoose';
import Role from './role'

var Schema = mongoose.Schema;

const User = mongoose.model('User', {
    username: String,
    password: String,
    role: {
        type: Schema.Types.ObjectId, ref: Role
    }
});

module.exports = User;
