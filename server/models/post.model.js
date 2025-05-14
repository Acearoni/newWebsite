// models/post.model.js
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    content: {
        type: String,
        required: [true, "Content is required"]
    },
    category: {
        type: String,
        enum: ['Local', 'Personal', 'Gaming', 'Socials'],
        required: [true, "Category is required"]
    },
    image: {
        type: String // could be a URL or path to uploaded image
    }
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
