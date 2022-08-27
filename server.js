// "start": "npm run dev"
const express = require('express');
const app = express();
const PORT = 3100;
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const homeRoutes =require('./routes/home');
const recipeRoutes =require('./routes/recipe');
const editRoutes =require('./routes/edit');
const authRoutes = require('./routes/auth');
require('dotenv').config({path: './config/.env'});
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const { request } = require('express');
require('./config/passport')(passport)

//Connect to Mongo with Mongoose
connectDB()

//set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
//session middleware
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
        mongoUrl: process.env.DB_STRING
        })
    })
)
app.use(passport.initialize())
app.use(passport.session())

//Set Routes
app.use('/', homeRoutes)
app.use('/recipe', recipeRoutes)
app.use('/edit', editRoutes)
app.use('/auth', authRoutes)

/*
        app.delete('/delete', (req, res)=>{
            foodCollection.deleteOne(
                {title: req.body.title}
            )
            .then(result => {
                console.log("delete")
            res.json('Delete article')
            })
            .catch(error => console.error(error))
        })
        

        /* update
        app.put('/updateOneLike', (req, res)=>{
            foodCollection.updateOne({
                title: req.body.title,  
                recipe:req.body.recipe},{
            $set: {
                recipe:"??"
            }
            },{
                upsert: false
            })
            .then(result => {
                console.log("update")
            res.json('Like Added')
            })
            .catch(error => console.error(error))
        })
})
*/

//start server
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));