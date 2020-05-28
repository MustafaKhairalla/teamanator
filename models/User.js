const mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//Create Schema


const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
    },

    password: {
        type: String,

    },

    typeOfTeam: {
        type: String
    }
});

// UserSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password)
// };

// UserSchema.pre("save", function (user){
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSalt(10), null);
// }); 
UserSchema.plugin(passportLocalMongoose)
//  UserSchema.plugin(mongooseUniqueValidator);

module.exports = User = mongoose.model("user", UserSchema);



