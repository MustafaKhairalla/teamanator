const express = require("express");
const router = express.Router();
const passport = require("../../config/passport");
//User model
const User = require("../../models/User");
// const Login = require("../../models/Login");

// @route GET api/user
// @desc Get ALL Users

//LOGIN 
router.post("/login", passport.authenticate("local"), (req, res) => {
    // User.find()
    //     .sort({ date: -1 })
    //     .then(users => res.json(users)).catch(err => res.status(404).json({err}));
    if(res.status === 401){
        console.log("invalid login")
    }
    console.log("Login successful");
    console.log(req); 
    // res.json(req.user)
    // .catch(err => 
    //     console.log(`Login error: ${err}`));
        // res.status(404).json({err}));
   
});

// @route POST api/users
// @desc  Create Users

//CREATE NEW USER ACCOUNT
router.post("/signup", (req, res) => { 
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
        // .then(user => res.json(user))
        .then((x)=>{
            console.log(`New User: ${x}`);
            // res.redirect(307, "/login"); 
        })
        .catch(err => res.status(404).json({err}));
});

//TEST ROUTE TO LIST ALL USERS IN DB !!!!!DELETE LATER!!!!!
router.get("/", (req,res) =>{
    User.find()
        .sort({ date: -1 })
        .then(users => res.json(users)).catch(err => res.status(404).json({err}));
})
// @route DELETE api/users/:id
// @desc  delete Users

router.delete("/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})





module.exports = router;