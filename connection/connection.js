const mongoose = require("mongoose")

url = "mongodb+srv://mongodb:dhanashri@cluster0.qdytt.mongodb.net/Program?retryWrites=true&w=majority"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(response => console.log("Connected to database successfully"))
    .catch(err => console.log(err))

module.exports = mongoose