//Put controllers to models
const RecipesArticle = require('../models/recipesArticle')

module.exports = {
    getUpdate: async (req, res) => {
        const id = req.params.id;
        try{
            const recipes = await
            RecipesArticle.find()
            res.render('update.ejs', {recipe: recipes, idArticle: id})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    },
    updateArticle: (req, res)=>{
       const id = req.params.id;
        RecipesArticle.findByIdAndUpdate(id,
            {
                title: req.body.title,
                article: req.body.article
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/edit");
            });
    } 
    // getEdit: (req, res) => {
    //     const id = req.params.id;
    //     console.log(id)
    //     RecipesArticle.find({}, (err, recipes) => {
    //         res.render('edit.ejs', {recipe: recipes, idArticle: id})
    //     })
    // } 

    // createArticle: async (req, res)=>{
    //     const recipe = new RecipesArticle(
    //         { 
    //             title: req.body.title, 
    //             article:req.body.article
    //         })
    //     try {
    //             await recipe.save();
    //             console.log(recipe)
    //             res.redirect('/')
    //     } catch (error) {
    //         if(error) return res.status(500).send(error);
    //         res.redirect('/');
    //     }
    // }

    // app.put('/updateOneLike', (req, res)=>{
    //         foodCollection.updateOne({
    //             title: req.body.title,  
    //             recipe:req.body.recipe},{
    //         $set: {
    //             recipe:"??"
    //         }
    //         },{
    //             upsert: false
    //         })
    //         .then(result => {
    //             console.log("update")
    //         res.json('Like Added')
    //         })
    //         .catch(error => console.error(error))
    //     })

}