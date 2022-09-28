//Comment controllers to models
const UserComment = require('../models/comment')

module.exports = {
    //Create comment
     comment: async (req, res)=>{
        console.log("create comment")
        try{
            await UserComment.create(
                {
                    comment:req.body.comment,
                    name: req.body.name,
                    email: req.body.email,
                })
            res.redirect('/')
        }catch(error){
            if(error) return res.status(500).send(error);
            res.redirect('/');
        }
    }
}