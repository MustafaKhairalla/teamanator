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

router.post("/", async (req, res) => {

    const newCards = req.body.formData;
    try {

        await newCards.forEach(o => {
            const newSport = new Sport({
                owner: req.userId,
                Name: o.field1 ? o.field1 : "unlisted",
                age: o.field2 ? o.field2 : "unlisted",
                division: o.field3 ? o.field3 : "unlisted",
                position: o.field4 ? o.field4 : "unlisted",
                phoneNumber: o.field5 ? o.field5 : "unlisted",
                email: o.field6 ? o.field6 : "unlisted",
                address: o.field7 ? o.field7 : "unlisted"
            }); // end constructor 
            return newSport.save()

        }); // end loop

    } catch (err) {
        console.log(err)
        res.status(404).json({ err });
    }
    return res.json({ status: 'ok' })
});// end post router


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