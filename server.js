// "start": "npm run dev"

//set require, get app, routes and path
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const homeRoutes =require('./routes/home');
// const recipeRoutes =require('./routes/recipe');
const dashboardRoutes =require('./routes/dashboard');
const commentRoutes =require('./routes/comment');
// const authRoutes = require('./routes/auth');
// const updateRoutes = require('./routes/update');
require('dotenv').config({path: './config/.env'});
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const { request } = require('express');
const layout = require('express-ejs-layouts');
const expressEjsLayouts = require('express-ejs-layouts');
require('./config/passport')(passport)

//Connect to Mongo with Mongoose
connectDB()

//set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(expressEjsLayouts);
//session middleware, keep login after refresh
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

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Set Routes
app.use('/', homeRoutes)
// app.use('/recipe', recipeRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/comment', commentRoutes)
// app.use('/auth', authRoutes)
// app.use('/update', updateRoutes)


//start server
app.listen(process.env.PORT, ()=> console.log(`Server is running !`)) 