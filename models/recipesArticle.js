const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    article:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        defaut:Date.now
    }
})
module.exports = mongoose.model('RecipesArticle', recipeSchema, 'recipesArticles');