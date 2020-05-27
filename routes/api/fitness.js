const express = require("express");
const router = express.Router();

//User model
const Fitness = require("../../models/Fitness");

// @route GET api/fintness
// @desc Get ALL fintness cards

router.get("/", (req, res) => {
    Fitness.find()
        .then(fitness => res.json(fitness))
});

// @route POST api/fitness
// @desc  Create fitness card

router.post("/", (req, res) => {

    let newCards = req.body;


    console.log(req);

    newCards.forEach(o => {
        const newFitness = new Fitness({
            owner: req.user.id,
            Name: o.field1 ? o.field1 : "unlisted",
            email: o.field2 ? o.field2 : "unlisted", // check order
            age: o.field3 ? o.field3 : "unlisted",
            weight: o.field4 ? o.field4 : "unlisted",  // check for array
            goal: o.field5 ? o.field5 : "unlisted",
            phoneNumber: o.field6 ? o.field6 : "unlisted",
            notes: o.field7 ? o.field7 : "unlisted"
        }); // end of constructor
        console.log("saving new card")
        newFitness.save().catch(err => res.status(404).json({ err }));

    }) // end loop
    return res.json({ status: 'ok' })

}); // end post route -------


// @route DELETE api/fitness/:id
// @desc  delete fitness

router.delete("/:id", (req, res) => {
    Fitness.findById(req.params.id)
        .then(fitness => fitness.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @route GET api/fitness/:id
// @ desc findbyID fitness cards

router.get("/:id", (req, res) => {
    Fitness.findById(req.params.id)
        .then(fitness => res.json(fitness))
});

module.exports = router;