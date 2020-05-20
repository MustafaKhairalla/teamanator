const express = require("express");
const router = express.Router();

//User model
const Login = require("../../models/Login");

// @route GET api/fintness
// @desc Get ALL fintness cards

router.get("/", (req, res) => {
    Login.find()
        .then(fitness => res.json(fitness))
});

// @route POST api/fitness
// @desc  Create fitness card

router.post("/", (req, res) => {
   const Login = new newLogin({
        
   })

    newLogin.save()
        .then(fitness => res.json(fitness)).catch(err => res.status(404).json({err}));
});


// @route DELETE api/fitness/:id
// @desc  delete fitness

router.delete("/:id", (req, res) => {
    Fitness.findById(req.params.id)
        .then(fitness => fitness.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @route GET api/fitness/:id
// @ desc findbyID fitness cards

router.get("/:id", (req, res) => {
    Fitness.findById(req.params.id)
        .then(fitness => res.json(fitness))
});

module.exports = router;