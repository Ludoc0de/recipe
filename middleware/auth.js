//auth middleware

module.exports = {
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