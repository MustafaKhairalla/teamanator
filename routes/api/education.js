const express = require("express");
const router = express.Router();

//User model
const Education = require("../../models/Education");

// @route GET api/education
// @desc Get ALL education cards

router.get("/", (req, res) => {
    Education.find()
        .then(education => res.json(education))
});

// @route POST api/education
// @desc  Create education card

router.post("/", (req, res) => {
    const newEducation = new Education({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email, // check order
        program: req.body.program,
        languages: req.body.languages, // check for array
        educationLevel: req.body.educationLevel,
        phoneNumber: req.body.phoneNumber,
        GPA: req.req.gpa
    });

    newEducation.save()
        .then(education => res.json(education));
});


// @route DELETE api/education/:id
// @desc  delete education

router.delete("/:id", (req, res) => {
    Education.findById(req.params.id)
        .then(education => education.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @route GET api/education/:id
// @ desc findbyID education cards

outer.get("/:id", (req, res) => {
    Education.findById(req.params.id)
        .then(education => res.json(education))
});