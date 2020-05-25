const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//create Schema
const EducationSchema = new Schema({
    owner: {
        type: String
    },

    Name: {
        type: String,
        required: false
    },

    program: {
        type: String,
        required: false
    },

    languages: [{
        type: String,
        required: false
    }],

    educationLevel: {
        type: String,
        required: false
    },

    GPA: {
        type: Number,
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

EducationSchema.plugin(mongooseUniqueValidator);

module.exports = Education = mongoose.model("education", EducationSchema);