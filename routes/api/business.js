const express = require("express");
const router = express.Router();

//User model
const Business = require("../../models/Business");

// @route GET api/business
// @desc Get ALL business cards

router.get("/", (req, res) => {
    Business.find()
        .then(business => res.json(business))
});


// @route POST api/business
// @desc  Create business card

router.post("/", (req, res) => {
    const newBusiness = new Business({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        title: req.body.title,
        salary: req.body.salary,
        department: req.body.department,
        phoneNumber: req.body.phoneNumber,
        address: {
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode
        }
    });

    newBusiness.save()
        .then(business => res.json(business));
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

outer.get("/:id", (req, res) => {
    Business.findById(req.params.id)
        .then(business => res.json(business))
});


// Notes
// find about images
// the order of create (post)
// check array input

