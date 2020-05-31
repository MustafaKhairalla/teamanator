const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//create Schema
const EducationSchema = new Schema({
    owner: {
        type: String
    },

    field1: {
        type: String,
        required: false
    },

    field2: {
        type: String,
        required: false
    },

    field3: [{
        type: String,
        required: false
    }],

    field4: {
        type: String,
        required: false
    },

    field5: {
        type: Number,
        required: false
    },

    field6: {
        type: String,
        required: false
    },

    field7: {
        type: String,
        required: false,
        unique: true
    },
});

EducationSchema.plugin(mongooseUniqueValidator);

module.exports = Education = mongoose.model("education", EducationSchema);