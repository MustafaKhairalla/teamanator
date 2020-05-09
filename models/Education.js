const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//create Schema
const EducationSchema = new Schema({
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

    program: {
        type: String,
        required: true
    },

    languages: [{
        type: String,
        required: true
    }],

    educationLevel: {
        type: String,
        required: true
    },

    GPA: {
        type: Number,
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
});

EducationSchema.plugin(mongooseUniqueValidator);

module.exports = Education = mongoose.model("education", EducationSchema);