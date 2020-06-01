const express = require("express");
const router = express.Router();

const Events = require("../../models/EventNotes");


router.post("/", (req,res) => {
    console.log(req.body); 
    const newNote = new Event({
        owner: req.body.owner,
        note: req.body.note
    })

    newNote.save().then((x) => {
        console.log(`New note created: ${x}`);
        res.json({ sucess: true}); 
    })
    .catch(err => res.status(404).json({err})); 
}); 

router.get("/:id", (req, res) => {
    Events.find({ owner: req.params.id})
        .then(eventNote => res.json(eventNote));
}); 

module.exports = router;