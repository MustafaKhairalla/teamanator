const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

//Create Schema
const BusinessSchema = new Schema({
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

    field3: {
        type: Number,
        required: false
    },

    field4: {
        type: String,
        required: false
    },

    field5: {
        type: String,
        required: false
    },

    field6: {
        type: String,
        required: false,
        unique: true
    },

    field7: {
        type: String,
        required: false
    }
});

BusinessSchema.plugin(mongooseUniqueValidator);

module.exports = Business = mongoose.model("business", BusinessSchema);