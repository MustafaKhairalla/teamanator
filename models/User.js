const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//Create Schema
const TeamSchema = new Schema({
    nameOfTeam: {
        type: String
    },
    typeOfTeam: {
        type: String
    }
})


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

    password: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    team: [TeamSchema]
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = User = mongoose.model("user", UserSchema);

