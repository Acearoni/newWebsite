import { Link } from "react-router-dom";
import '../css/post.css'

const PostCard = ({ post }) => (
    <Link to={`/posts/${post._id}`} className="post-card-link">
        <h3 className="post-card-title">{post.title}</h3>
        <p className="post-card-snippet">{post.snippet}</p>
        {post.image && (
            <img src={post.image} alt={post.title} className="post-card-image" />
        )}
    </Link>
);

export default PostCard;