const PostController = require('../controllers/post.controller');

module.exports = app => {
    app.post('/api/posts', PostController.createPost); // for you only
    app.get('/api/posts', PostController.getAllPosts); // public
    app.get('/api/posts/:id', PostController.getOnePost); // view one
    app.get('/api/posts/category/:category', PostController.getPostsByCategory); // for filtered tabs
    app.delete('/api/posts/:id', PostController.deletePost);
};
