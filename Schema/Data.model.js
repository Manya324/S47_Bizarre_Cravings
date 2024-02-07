const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    serial: {
        type: String,
        required: true,
    },
    item: {
        type: String,
        required: true,
    },
    person: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const Modal = mongoose.model("weird_items_eaten_list", DataSchema);

module.exports = Modal;