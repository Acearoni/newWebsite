const Post = require('../models/post.model');
const fs = require('fs');
const path = require('path');

module.exports = {
    createPost: async (req, res) => {
        try {
            const { title, content, category } = req.body;

            const snippet = content.length > 30 ? content.slice(0, 30) + '...' : content;
            const image = req.file ? `/uploads/${req.file.filename}` : null;

            const newPost = await Post.create({
                title,
                content,
                category,
                snippet,
                image,
            });

            res.status(201).json(newPost);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.find().sort({ createdAt: -1 });
            res.json(posts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getOnePost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            res.json(post);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getPostsByCategory: async (req, res) => {
        try {
            const posts = await Post.find({ category: req.params.category });
            res.json(posts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deletePost: async (req, res) => {
        try {
            const post = await Post.findByIdAndDelete(req.params.id);

            if (!post) return res.status(404).json({ message: "Post not found" });

            // If post has an image, delete it from the uploads folder
            if (post.image) {
                const imagePath = path.join(__dirname, '..', post.image);
                fs.unlink(imagePath, (err) => {
                    if (err) console.log('Error deleting image:', err);
                });
            }

            res.json({ message: "Post and image deleted successfully" });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
