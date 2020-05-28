const express = require("express");
const router = express.Router();

//User model
const Business = require("../../models/Business");

// @route GET api/business inside AXIOS
// @desc Get ALL business cards

router.get("/", (req, res) => {
    Business.find()
        .then(business => res.json(business))
});


// @route POST api/business
// @desc  Create business card

router.post("/", (req, res) => {

    let newCards = req.body;

    newCards.forEach(o => {
        const newBusiness = new Business({
            owner: req.user.id, // check check
            Name: o.field1 ? o.field1 : "unlisted",
            title: o.field2 ? o.field2 : "unlisted",
            salary: o.field3 ? o.field3 : "unlisted",
            department: o.field4 ? o.field4 : "unlisted",
            phoneNumber: o.field5 ? o.field5 : "unlisted",
            email: o.field6 ? o.field6 : "unlisted",
            address: o.field7 ? o.field7 : "unlisted"

        }); // end of constructor
        newBusiness.save()
            .catch(err => res.status(404).json({ err }));
    }); // end loop
    return res.json({ status: 'ok' })

});// end post reouter

// @route DELETE api/business/:id
// @desc  delete business

router.delete("/:id", (req, res) => {
    Business.findById(req.params.id)
        .then(business => business.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @route GET api/business/:id
// @ desc findbyID business cards

router.get("/:id", (req, res) => {
    Business.findById(req.params.id)
        .then(business => res.json(business))
});

module.exports = router;

//req.user

// Notes
// find about images
// the order of create (post)
// check array input

