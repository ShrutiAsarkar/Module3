const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    name:{
        type : String,
        required : true,
        index: { unique: true }
    },
    email:{
        type : String,
        required : true
    },
    contactno:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true,

    }

});

module.exports = module.exports = mongoose.model('User', UserSchema);