const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//Create Schema
const BusinessSchema = new Schema({
    owner: {
        type: String
    },

    Name: {
        type: String,
        required: false
    },

    title: {
        type: String,
        required: false
    },

    salary: {
        type: Number,
        required: false
    },

    department: {
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
        street: {
            type: String,
            required: false
        },

        city: {
            type: String,
            required: false
        },

        state: {
            type: String,
            required: false
        },

        zipCode: {
            type: Number,
            required: false
        }

    }
});

BusinessSchema.plugin(mongooseUniqueValidator);

module.exports = Business = mongoose.model("business", BusinessSchema);