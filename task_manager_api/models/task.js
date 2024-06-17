const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        // provide a custom message if the value is not provided
        required: [true, "Must provide a name"],
        // remove whitespace
        trim: true,
        // set max string length
        maxlength: [20, "name cannot be longer than 20 characters"]
    }, 
    completed: {
        type: Boolean,
        // set a default value
        default: false,
    }
})

module.exports = mongoose.model("Task", TaskSchema);
