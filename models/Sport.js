const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//Create Schema
const SportSchema = new Schema({
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

    division: {
        type: String,
        required: false
    },

    position: {
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

    address: {
        type: String,
        required: false
    }
});

SportSchema.plugin(mongooseUniqueValidator);

module.exports = Sport = mongoose.model("sport", SportSchema);