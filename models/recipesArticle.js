//Model recipesArticle
const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    status: {
        type: String,
        default: 'draft',
    enum: ['draft', 'public'],
  } ,
    image: [{
        type: String,
        required: true
    }],
    cloudinaryId: [{
        type: String,
        required: true,
    }],
    article:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('RecipesArticle', recipeSchema, 'recipesArticles');