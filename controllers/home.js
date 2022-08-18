const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    getIndex: async (req, res) => {
        try{
            const recipes = await
            RecipesArticle.find()
            res.render('index.ejs', {recipe: recipes})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    }, 
    createArticle: async (req, res)=>{
        const recipe = new RecipesArticle(
            { 
                title: req.body.title, 
                article:req.body.article
            })
        try {
                await recipe.save();
                console.log(recipe)
                res.redirect('/')
        } catch (error) {
            if(error) return res.status(500).send(error);
            res.redirect('/');
        }
            
        // foodCollection.insertOne({ title: req.body.title, 
        //     recipe:req.body.recipe})
        //     .then(result =>{
        //         res.redirect('/')
        //     })
        //     .catch(error => console.error(error))
    }

}