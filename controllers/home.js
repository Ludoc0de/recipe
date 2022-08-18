const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    getIndex: async (req, res) => {
        try{
            RecipesArticle.find()
            .then(results =>{
                res.render('index.ejs', {food: results})
            })
        } catch(error) {
            if(error){
                console.error(error)
            } 
        }
    }
}