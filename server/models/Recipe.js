const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const recipeSchema = new Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: mongoose.Schema.Types.Date,
        default: Date.now
    },
    author: {
        type: ObjectId,
        ref: "User"
    }
});

module.exports = new Model('Recipe', recipeSchema);
