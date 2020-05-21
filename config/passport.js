var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models/User");

// OLD: DEFAULT CODE
passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
        usernameField: "email",
        passwordField: "password"
    },
    function (email, password, done) {
        // When a user tries to sign in this code runs
        
        db.findOne({        
                email: email
          
        }).then(function (dbUser) {
            console.log({dbUser})
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
           
            // If none of the above, return the user
            return done(null, dbUser);
        });
    }
));
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

// NEW CODE FOR MONGOOSE
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//EXPORT 
module.exports = passport;