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
    //req.body.users.forEach(user=> {
    //
    //})
    const newBusiness = new Business({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        title: req.body.title,
        salary: req.body.salary,
        department: req.body.department,
        phoneNumber: req.body.phoneNumber,
        address: {
            street: req.body.address.street,
            city: req.body.address.city,
            state: req.body.address.state,
            zipCode: req.body.address.zipCode
        }
    });

    newBusiness.save()
        .then(business => res.json(business))
        .catch(err => res.status(404).json({ err }));
});

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

// Notes
// find about images
// the order of create (post)
// check array input

