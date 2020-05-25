const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//create Schema
const FitnessSchema = new Schema({
    owner: {
        type: String
    },

    Name: {
        type: String,
        required: false
    },

    age: {
        type: String,
        required: false
    },

    weight: {
        type: String,
        required: false
    },

    goal: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    },

    phoneNumber: {
        type: String,
        required: false
    },

    email: {
        type: String,
        required: false,
        unique: true
    },


});

FitnessSchema.plugin(mongooseUniqueValidator);

module.exports = Fitness = mongoose.model("fitness", FitnessSchema);