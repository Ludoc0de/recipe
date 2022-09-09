//Edit controllers to models
const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    //Display all recipes
    getEdit: async (req, res) => {
        try{
            const recipes = await
            RecipesArticle.find()
            res.render('edit.ejs', {recipe: recipes})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    },
    //Create article 
    createArticle: async (req, res)=>{
        try{
            await RecipesArticle.create(
                {
                    title: req.body.title,
                    article:req.body.article
                })
            res.redirect('/edit')
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/edit');
        }
    }
}