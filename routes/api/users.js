const express = require("express");
const router = express.Router();
var passport = require("passport");

// const passport = require("../../config/passport");
//User model
const User = require("../../models/User");

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// const Login = require("../../models/Login");

// @route GET api/user
// @desc Get ALL Users

var auth = {};
// Post registration
auth.doRegister = function (req, res) {
    //create new user and salt/hash password 
    User.register(new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.email,
        email: req.body.email,
    }), req.body.password, function (err, user) {
        if (err) {
            return res.status(404).json({ err });
        }

        return res.json({ sucess: true });

    });
};

//LOGIN 
router.post("/login", (req, res, next) => {


    passport.authenticate('local',
        (err, user, info) => {


            if (err) {
                return next(err);
            }

            if (!user) {
                return res.json({ sucess: false });
            }

            //return user ID to store into cards 
            return res.json({ sucess: user._id });


        })(req, res, next);
});

// @route POST api/users
// @desc  Create Users

//CREATE NEW USER ACCOUNT
router.post('/register', auth.doRegister);

router.post("/signup", (req, res) => {
    console.log({ req })
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.email,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
        // .then(user => res.json(user))
        .then((x) => {
            console.log(`New User: ${x}`);
            res.json({ sucess: true });
        })
        .catch(err => res.status(404).json({ err }));
});

//TEST ROUTE TO LIST ALL USERS IN DB !!!!!DELETE LATER!!!!!
router.get("/", (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(users => res.json(users)).catch(err => res.status(404).json({ err }));
})
// @route DELETE api/users/:id
// @desc  delete Users

router.delete("/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

router.put("/type/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => user.update(req.body))
        .catch(err => res.status(404).json({ success: false }));
})// note how to do 





module.exports = router;

