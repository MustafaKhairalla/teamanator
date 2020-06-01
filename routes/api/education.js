const express = require("express");
const router = express.Router();

//User model
const Education = require("../../models/Education");
const User = require("../../models/User");

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
                field1: o.field1 ? o.field1 : "unlisted",
                field2: o.field2 ? o.field2 : "unlisted",
                field3: o.field3 ? o.field3 : "unlisted",
                field4: o.field4 ? o.field4 : "unlisted",
                field5: o.field5 ? o.field5 : "unlisted",
                field6: o.field6 ? o.field6 : "unlisted",
                field7: o.field7 ? o.field7 : "unlisted"
            }); // end constructor 

            newEducation.save()
                .catch(err => res.status(404).json({ err }));

        }); // end loop
        await User.findById(req.body.userId).then(user => user.update({ typeOfTeam: "Education" }))

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
    Education.find({ owner: req.params.id })
        .then(education => res.json(education))
});

module.exports = router;