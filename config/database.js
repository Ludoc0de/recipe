//use mongoose to connect on database mongodDB
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const db = await mongoose.connect(
            process.env.DB_STRING
        )
        console.log(`MongoDB connected: ${db.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB