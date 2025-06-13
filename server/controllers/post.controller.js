const Post = require('../models/post.model');

module.exports = {
    createPost: async (req, res) => {
        try {
            const { title, content, category } = req.body;

            // Generate a snippet: First 100 characters + ellipsis
            const snippet = content.length > 100 ? content.slice(0, 100) + '...' : content;

            const newPost = await Post.create({
                title,
                content,
                category,
                snippet
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
            const deletedPost = await Post.findByIdAndDelete(req.params.id);
            if (!deletedPost) {
                return res.status(404).json({ message: "Post not found" });
            }
            res.status(200).json({ message: "Post deleted successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};
