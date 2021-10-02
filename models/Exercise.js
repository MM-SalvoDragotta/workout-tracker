const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({	
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    duration: {
        type: Number,
        required: true
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