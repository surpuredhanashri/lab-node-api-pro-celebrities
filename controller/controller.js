const router = require("express").Router()
const Celebrity = require("../model/celebrity")
const ObjectId = require("mongoose").Types.ObjectId


// the get method will fetch all the celebrities while post method will add new celebrities
router.route("/")
    .get((req, res, next) => {
        Celebrity.find((err, celebrity) => {
            if (err) next()
            else
                res.send(celebrity)
        })

    }, (req, res) => res.status(404).json({ error: "Error while fetching data. Please try again later!" }))

    router.post((req, res) => {

        const celeb = new Celebrity({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })          

        if (req.body.name) {
            celeb.save((err, celeb) => {
                res.status(200).json({ New_Celebrity: celeb })
            })
        } else res.status(404).json({ error: "Name field cannot be empty" })
    })

// it will return the celebrity which matches the specified id or it will throw error.
router.get("/:id", (req, res) => {
    const id = req.params.id

    if (ObjectId.isValid(id)) {

        Celebrity.findOne({ "_id": id }, (err, celeb) => {
            if (err) res.status(500).json({ message: "Server Error Please Try again after some time!" })
            else if (celeb) {
                res.send(celeb)
            } else res.status(404).json({ error: "Celebrity not found!" })
        })
    }
    else res.status(404).json({ error: "Invalid Id" })
})


// it will delete the celebrity whose id matches the specified id.
router.delete("/:id/delete", (req, res) => {

    const id = req.params.id

    if (ObjectId.isValid(id)) {

        Celebrity.deleteOne({ "_id": id }, (err, response) => {
            if (err) res.send(`Error while deleting ${id}`)
            else {
                if (response.deletedCount)
                    res.send(`Celebrity with id ${id} was deleted successfully`)
                else res.status(404).json({ error: "Celebrity with specified Id doesnt exist!" })

            }
        })
    } else res.status(404).json({ error: "Invalid Id" })

})



// it will update the celebrity whose id matches the specified id.
router.put("/:id/edit", (req, res) => {

    const id = req.params.id

    const celeb = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    }

    if (!ObjectId.isValid(id)) res.status(404).json({ error: "Invalid Id" })

    else {
        if (req.body.name) {

            Celebrity.updateOne({ "_id": id }, celeb, (err, response) => {
                if (err) res.send(`Error while updating ${id}`)
                if (response.nModified)
                    res.redirect(`/celebrities`)
                else res.status(404).json({ message: "There was no new data to change or the celebrity doesn't exist!" })
            })
        }
        else res.status(404).json({ error: "Name field cannot be empty" })
    }

})

module.exports = router