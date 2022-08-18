// "start": "npm run dev"

const express = require('express');
//const bodyParser = require('body-parser')
//const { MongoClient } = require('mongodb')
const app = express();
const PORT = 3100;
const mongoose = require('mongoose');
const connectDB = require('./config/database');
require('dotenv').config({path: './config/.env'});

//Connect to Mongo
//let db,  
//    dbConnectionString = process.env.DB_STRING,
//    dbName = 'recipe',
//    dbCollection ='food'


//set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
//app.use(bodyParser.json())

//Connect to Mongo with Mongoose
connectDB()


/*
MongoClient.connect(dbConnectionString, {useUnifiedTopology: true}) 
    .then(client =>{
        console.log('Connected to Database !')
        const db = client.db(dbName)
        const foodCollection =db.collection(dbCollection)

        app.use(bodyParser.urlencoded({extended: true}))

        
        app.get('/', (req, res) => {
            foodCollection.find().toArray()
                .then(results =>{
                    res.render('index.ejs', {food: results})
                })
                .catch(error => console.error(error))
        })
        
        app.post('/add', (req, res)=>{
            foodCollection.insertOne({ title: req.body.title, 
                recipe:req.body.recipe})
                .then(result =>{
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
        
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