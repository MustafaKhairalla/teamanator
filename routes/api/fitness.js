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
    const newFitness = new Fitness({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email, // check order
        age: req.body.age,
        weight: req.body.weight, // check for array
        goal: req.body.goal,
        phoneNumber: req.body.phoneNumber,
        notes: req.req.notes
    });

    newEducation.save()
        .then(fitness => res.json(fitness));
});


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