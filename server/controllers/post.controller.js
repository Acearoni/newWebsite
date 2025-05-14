const Post = require('../models/post.model');

module.exports = {
    createPost: async (req, res) => {
        try {
            const newPost = await Post.create(req.body);
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
    }
};
