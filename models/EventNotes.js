const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

const EventNoteSchema = new Schema({
    owner: {
        type: String
    },
    note: {
        type: String
    }
}); 

EventNoteSchema.plugin(mongooseUniqueValidator); 

module.exports = Events = mongoose.model("events" , EventNoteSchema); 