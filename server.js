// "start": "npm run dev"

//set require, get app, routes and path
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const homeRoutes =require('./routes/home');
const dashboardRoutes =require('./routes/dashboard');
const commentRoutes =require('./routes/comment');
require('dotenv').config({path: './config/.env'});
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const methodOverride = require("method-override");
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
//Use forms for put / delete
app.use(methodOverride("_method"));
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
app.use('/dashboard', dashboardRoutes)
app.use('/comment', commentRoutes)



//start server
app.listen(process.env.PORT, ()=> console.log(`Server is running !`)) 