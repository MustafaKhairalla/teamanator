const express = require("express");
const router = express.Router();

//User model
const Sport = require("../../models/Sport");

// @route GET api/sport
// @desc Get ALL sport cards

router.get("/", (req, res) => {
    Sport.find()
        .then(sport => res.json(sport))
});

// @route POST api/sport
// @desc  Create sport card

router.post("/", (req, res) => {
    const newSport = new Sport({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email, // check order
        age: req.body.age,
        division: req.body.division, // check for array
        position: req.body.position,
        phoneNumber: req.body.phoneNumber,
    });

    newSport.save()
        .then(sport => res.json(sport));
});


// @route DELETE api/sport/:id
// @desc  delete sport

router.delete("/:id", (req, res) => {
    Sport.findById(req.params.id)
        .then(sport => sport.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @route GET api/sport/:id
// @ desc findbyID sport cards

router.get("/:id", (req, res) => {
    Sport.findById(req.params.id)
        .then(sport => res.json(sport))
});

module.exports = router;