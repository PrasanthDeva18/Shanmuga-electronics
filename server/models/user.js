const mongoose = require('mongoose')
const schema = mongoose.Schema;

const userD = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    role:{
        type:String,
        default:'user'
    },
    avatar:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    createdAt :{
        type: Date,
        default: Date.now
    }

})

const users =  mongoose.model('user',userD)

module.exports = users;
