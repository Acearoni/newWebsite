const PostController = require('../controllers/post.controller');
const upload = require('../middleware/upload'); // ✅ Multer middleware
const authenticate = require('../middleware/authenticate');

module.exports = app => {
    app.post('/api/posts', upload.single("image"), PostController.createPost); // for you only
    app.get('/api/posts', PostController.getAllPosts); // public
    app.get('/api/posts/:id', PostController.getOnePost); // view one
    app.get('/api/posts/category/:category', PostController.getPostsByCategory); // for filtered tabs
    app.delete('/api/posts/:id', PostController.deletePost);
    app.post('/api/posts', authenticate, upload.single('image'), PostController.createPost);
};
