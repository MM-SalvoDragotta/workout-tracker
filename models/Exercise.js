const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({	
    type: {
        type: String,
        required: "Type is required"
    },
    name: {
        type: String,
        required: "Name is required",
        trim: true,
    },
    duration: {
        type: Number,
        required: "Duration is required"
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;