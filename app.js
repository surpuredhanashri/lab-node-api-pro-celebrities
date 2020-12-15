const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const router = require("./controller/controller")

app.use(bodyParser.json())
app.use(cors({ origin: "*" }))

app.use('/celebrities', router)
app.listen(3000, () => console.log(`App listening on port 3000!`))