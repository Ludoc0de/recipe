const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const app = express()
require('dotenv').config()

let db,  
    dbConnectionString = process.env.DB_STRING,
    dbName = 'recipe',
    dbCollection ='food'

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyParser.json())

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
        */
        app.listen(3000, function(){
            console.log("listening on 3000")
        })
        
    })
    .catch(error => console.error(error))