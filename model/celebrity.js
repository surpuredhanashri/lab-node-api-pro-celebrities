const mongoose = require("../connection/connection")

const CelebritySchema = new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

const Celebrity = mongoose.model("celebrities", CelebritySchema)

module.exports = Celebrity