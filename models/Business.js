const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//Create Schema
const BusinessSchema = new Schema({
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

    title: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },

    department: {
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

    address: {
        street: {
            type: String,
            required: true
        },

        city: {
            type: String,
            required: true
        },

        state: {
            type: String,
            required: true
        },

        zipCode: {
            type: Number,
            required: true
        }

    }
});

BusinessSchema.plugin(mongooseUniqueValidator);

module.exports = Business = mongoose.model("business", BusinessSchema);