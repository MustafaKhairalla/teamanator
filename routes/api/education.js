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

router.post("/", async (req, res) => {

    console.log(req.body)
    const newCards = req.body.formData;
    try {

        await newCards.forEach(o => {
            const newEducation = new Education({
                owner: req.body.userId,
                Name: o.field1 ? o.field1 : "unlisted",
                program: o.field2 ? o.field2 : "unlisted",
                languages: o.field3 ? o.field3 : "unlisted",
                educationLevel: o.field4 ? o.field4 : "unlisted",
                GPA: o.field5 ? o.field5 : "unlisted",
                phoneNumber: o.field6 ? o.field6 : "unlisted",
                email: o.field7 ? o.field7 : "unlisted"
            }); // end constructor 

            newEducation.save()
                .catch(err => res.status(404).json({ err }));

        }); // end loop

    } catch (err) {
        console.log(err)
        res.status(404).json({ err });
    }

    return res.json({ status: 'ok' })
});// end post route


// @route DELETE api/education/:id
// @desc  delete education

router.delete("/:id", (req, res) => {
    Education.findById(req.params.id)
        .then(education => education.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @route GET api/education/:id
// @ desc findbyID education cards

router.get("/:id", (req, res) => {
    Education.findById(req.params.id)
        .then(education => res.json(education))
});

module.exports = router;