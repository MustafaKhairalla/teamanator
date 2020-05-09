const express = require("express");
const router = express.Router();

//User model
const User = require("../../models/User");

// @route GET api/user
// @desc Get ALL Users

router.get("/", (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(users => res.json(users))
});

// @route POST api/users
// @desc  Create Users

router.post("/", (req, res) => {
    const newUser = new User({
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
        .then(user => res.json(user));
});

// @route DELETE api/users/:id
// @desc  delete Users

router.delete("/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})





module.exports = router;