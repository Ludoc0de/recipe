//Model comment
const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required: true
    },
    name: {
        type: String,
        required: true
    } ,
    email:{
        type:String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('UserComment', commentSchema);