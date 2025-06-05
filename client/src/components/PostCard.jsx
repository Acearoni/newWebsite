// src/components/PostCard.jsx
import { Link } from "react-router-dom";

const PostCard = ({ post }) => (
    <Link to={`/posts/${post._id}`} className="block border rounded-lg p-4 hover:shadow-md transition">
        <h3 className="text-xl font-semibold">{post.title}</h3>
        <p className="text-gray-600">{post.snippet}</p>
        {/* Optional image */}
        {post.image && <img src={post.image} alt={post.title} className="mt-2 rounded-md" />}
    </Link>
);

export default PostCard;
