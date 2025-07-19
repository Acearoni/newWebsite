// models/post.model.js
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [2, "Title must be at least 10 characters long"],
        maxLength: [50, "Title must not exceed 30 characters long"]
    },
    content: {
        type: String,
        required: [true, "Content is required"]
    },
    category: {
        type: String,
        enum: ['Local', 'Personal', 'Gaming', 'Social'],
        required: [true, "Category is required"]
    },
    snippet: {
        type: String,
        required: true
    },
    image: {
        type: String // could be a URL or path to uploaded image
    }
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
