//Comment controllers to models
const UserComment = require('../models/comment')

module.exports = {
    //Display all comment
    getComment: async (req, res) => {
        try{
            const comments = await UserComment.find()
            res.render('recipe.ejs', {comment: comments})
        } catch(error) {
            if(error) return res.status(500).send(error)
        }
    },
    //Create comment
     comment: async (req, res)=>{
        console.log(req.body)
        try{
            await UserComment.create(
                {
                    comment:req.body.comment,
                    name: req.body.name,
                    email: req.body.email,
                    createdAt: req.body.createdAt
                })
            res.redirect('/')
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/');
        }
    }
}