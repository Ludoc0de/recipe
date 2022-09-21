//Put controllers to models
const recipesArticle = require('../models/recipesArticle');
const RecipesArticle = require('../models/recipesArticle');
//get cloudinary middleware
const cloudinary = require("../middleware/cloudinary");

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
    // updateArticle: async (req, res)=>{
    //     const id = req.params.id;
    //     try{ 
    //         await RecipesArticle.findByIdAndUpdate(id,
    //             {
    //                 title: req.body.title,
    //                 article: req.body.article
    //             })
    //             res.redirect('/edit');
    //     }catch(error){
    //         if(error) return res.status(500).send(error);
    //         res.redirect('/edit');
    //     }
    // },

    // Update recipe title, article, images
    // updateArticle: async (req, res)=>{
    //     const id = req.params.id;
    //     try{
    //         // Upload array images
    //         let resultImage = []
    //         let resultId = []
    //         const files = req.files
    //         for (let file of files){
    //             //loop the results cause can have more than 1 images path
    //             const results = await cloudinary.uploader.upload(file.path);
    //             //push each one in the []
    //             resultImage.push(results.secure_url)
    //             resultId.push(results.public_id)
    //         }
    //         await RecipesArticle.findByIdAndUpdate(id,
    //             {
    //                 title: req.body.title,
    //                 image: resultImage,
    //                 cloudinaryId: resultId,
    //                 article:req.body.article,
    //             })
    //         res.redirect('/edit')
    //     }catch(error){
    //         if(error) return res.status(500).send(error);
    //         res.redirect('/edit');
    //     }
    // },

    // work on put
    updateArticle: async (req, res)=>{
        const id = req.params.id;
        try{
            // Upload array images
            let resultImage = []
            let resultId = []
            const files = req.files
            for (let file of files){
                //loop the results cause can have more than 1 images path
                const results = await cloudinary.uploader.upload(file.path);
                //push each one in the []
                resultImage.push(results.secure_url)
                resultId.push(results.public_id)
            }
            await RecipesArticle.findByIdAndUpdate(id,
                {
                    title: req.body.title,
                    $set: {image: resultImage},
                    $set: {cloudinaryId: resultId},
                    article:req.body.article,
                })
            res.redirect('/edit')
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/edit');
        }
    },

    //Delete recipe
    deleteArticle: async (req, res) => {
        const id = req.params.id;
        try{
            //find recipe by id
            let recipe = await RecipesArticle.findById(id);
            //delete images from cloudinary
            const cloudIds = recipe.cloudinaryId
            for (let cloudId of cloudIds){
                //loop cause can have more than 1 images path
                await cloudinary.uploader.destroy(cloudId);
            }
            //delete recipe article
            await recipe.remove();
            res.redirect("/edit");
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/edit');
        }
    }
}