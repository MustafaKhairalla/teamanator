const express = require("express");
const router = express.Router();

//User model
const Fitness = require("../../models/Fitness");
const User = require("../../models/User");

// @route GET api/fintness
// @desc Get ALL fintness cards

router.get("/", (req, res) => {
    Fitness.find()
        .then(fitness => res.json(fitness))
});

// @route POST api/fitness
// @desc  Create fitness card

router.post("/", async (req, res) => {

    const newCards = req.body.formdata;
    try {


        await newCards.forEach(async o => {
            const newFitness = new Fitness({
                owner: req.body.userId,
                Name: o.field1 ? o.field1 : "unlisted",
                email: o.field2 ? o.field2 : "unlisted", // check order
                age: o.field3 ? o.field3 : "unlisted",
                weight: o.field4 ? o.field4 : "unlisted",  // check for array
                goal: o.field5 ? o.field5 : "unlisted",
                phoneNumber: o.field6 ? o.field6 : "unlisted",
                notes: o.field7 ? o.field7 : "unlisted"
            }); // end of constructor
            console.log("saving new card")
            return newFitness.save();

        }); // end loop
        await User.findById(req.body.userId).then(user => user.update({ typeOfTeam: "Fitness" }))

    } catch (err) {
        console.log(err)
        res.status(404).json({ err });
    }

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