const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//Create Schema
const SportSchema = new Schema({
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

    division: {
        type: String,
        required: true
    },

    position: {
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
});

SportSchema.plugin(mongooseUniqueValidator);

module.exports = Sport = mongoose.model("sport", SportSchema);