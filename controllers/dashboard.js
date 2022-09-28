//get cloudinary middleware
const cloudinary = require("../middleware/cloudinary");
//Dashboard controllers to models
const RecipesArticle = require('../models/recipesArticle')

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
    }
}