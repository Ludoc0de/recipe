//Model comment
const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required: true
    },
    name: {
        type: String,
        default: 'draft',
    } ,
    mail:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        defaut:Date.now
    }
})
module.exports = mongoose.model('comment', commentSchema);