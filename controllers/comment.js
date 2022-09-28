//Comment controllers to models
const UserComment = require('../models/comment')

module.exports = {
    //Create comment
     comment: async (req, res)=>{
        try{
            await UserComment.create(
                {
                    comment:req.body.comment,
                    name: req.body.name,
                    email: req.body.email,
                    //create the comment with recipe id where created
                    recipe: req.params.id
                })
            //Redirect on the same page
            res.redirect('/recipe/'+ req.params.id)
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/');
        }
    }
}