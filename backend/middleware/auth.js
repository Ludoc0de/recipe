//auth middleware, protect our routes

module.exports = {
    //check if we login
    userAuth: function(req, res, next) {
        if(req.isAuthenticated()){
            return next()
        } else {
            res.redirect('/')
        }
    },
    ensureGuest: function(req, res, next) {
        if(req.isAuthenticated()) {
            res.redirect('/edit')
        } else {
            return next()
        }
    },

}