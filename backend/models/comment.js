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
    },
    //get the id recipe
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Recipe"
    }
})
module.exports = mongoose.model('UserComment', commentSchema);