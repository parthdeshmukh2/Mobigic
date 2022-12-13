const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: String,
    password: {required:true, type:String}
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;