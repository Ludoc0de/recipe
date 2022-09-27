//Comment controllers to models
const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    //Display all comment
    getComment: async (req, res) => {
        try{
            const recipes = await RecipesArticle.find()
            res.render('edit.ejs', {recipe: recipes})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    },
    //Create comment
     comment: async (req, res)=>{
        try{
            await RecipesArticle.create(
                {
                    name: req.body.name,
                    comment:req.body.comment
                })
            res.redirect('/edit')
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/edit');
        }
    }
}