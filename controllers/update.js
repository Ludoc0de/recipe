//Put controllers to models
const recipesArticle = require('../models/recipesArticle');
const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    // Display id recipe
    getUpdate: async (req, res) => {
        const id = req.params.id;
        try{
            const recipes = await
            await RecipesArticle.find()
            res.render('update.ejs', {recipe: recipes, idArticle: id})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    },
    //Update recipe title, article
    updateArticle: async (req, res)=>{
        const id = req.params.id;
        try{ 
            await RecipesArticle.findByIdAndUpdate(id,
                {
                    title: req.body.title,
                    article: req.body.article
                })
                res.redirect('/edit');
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/edit');
        }
    },
    //Delete recipe
    deleteArticle: async (req, res) => {
        const id = req.params.id;
        try{
            await RecipesArticle.findByIdAndRemove(id)
            res.redirect("/edit");
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/edit');
        }
    }
}