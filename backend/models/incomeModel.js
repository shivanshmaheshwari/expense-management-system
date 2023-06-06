const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxlength: 20,
        trim: true
    },
    type: {
        type: String,
        default: "income"
    },
    date: {
        type: Number,
        required: true,
        maxlength: 20,
        trim: true
    },
})
