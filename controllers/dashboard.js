//get cloudinary middleware
const cloudinary = require("../middleware/cloudinary");
//Dashboard controllers to models
const RecipesArticle = require('../models/recipesArticle')
const UserComment = require('../models/comment')

module.exports = {
    //Display all recipes
    getDashboard: async (req, res) => {
        try{
            const recipes = await RecipesArticle.find()
            res.render('dashboard.ejs', {recipe: recipes})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    },
    //Create article 
     createArticle: async (req, res)=>{
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
            await RecipesArticle.create(
                {
                    title: req.body.title,
                    status: req.body.status,
                    image: resultImage,
                    cloudinaryId: resultId,
                    article:req.body.article,
                })
            res.redirect('/dashboard')
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/dashboard');
        }
    },
    // Display id recipe
    getUpdate: async (req, res) => {
        const id = req.params.id;
        try{
            const recipes = await RecipesArticle.find();
            //get comments from the recipe id
            const comments = await UserComment.find({recipe: id});
            res.render('update.ejs', {recipe: recipes, idArticle: id, comment: comments})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    },
     // Update recipe title, article, images
    updateArticle: async (req, res)=>{
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
            //Upload array images
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
                    status: req.body.status,
                    image: resultImage,
                    cloudinaryId: resultId,
                    article:req.body.article,
                })
            res.redirect('/dashboard')
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/dashboard');
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
            res.redirect("/dashboard");
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/dashboard');
        }
    },
    //comments
    // Display id recipe 
    //do the get comment, create the route
    getComment: async (req, res) => {
        const id = req.params.id;
        try{
            const recipes = await RecipesArticle.find();
            //get comments from the recipe id
            const comments = await UserComment.find({recipe: id});
            res.render('update.ejs', {recipe: recipes, idArticle: id, comment: comments})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    },
     updateComments: async (req, res)=>{
        console.log("comment")
        // const id = req.params.id;
        // try{
        //     //find comments by id
        //     let comment = await UserComment.findById(id);
        //     await UserComment.findByIdAndUpdate(id,
        //         {
        //             comment:req.body.comment,
        //             name: req.body.name,
        //             //get the recipe id, comment visible only on this recipe
        //             recipe: req.params.id
        //         })
        //     //Redirect on the same page
        //     res.redirect('/recipe/'+ req.params.id)
        // }catch(error){
        //     if(error) return res.status(500).send(error);
        //     res.redirect('/');
        // }
    }
}