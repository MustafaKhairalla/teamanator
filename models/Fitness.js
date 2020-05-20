const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//create Schema
const FitnessSchema = new Schema({
    owner: {
        type: String
    },
    img: {
        data: Buffer,
        contentType: String
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },

    weight: {
        type: String,
        required: true
    },

    goal: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    notes: {
        type: String,
        required: true
    },
});

FitnessSchema.plugin(mongooseUniqueValidator);

module.exports = Fitness = mongoose.model("fitness", FitnessSchema);