import { Link } from "react-router-dom";
import '../css/post.css'

const PostCard = ({ post }) => (

    <Link to={`/posts/${post._id}`} className="post-card-link">
        <div className="post-card-inline">
            {post.image && (
                <img
                    src={`http://localhost:8000${post.image}`}
                    alt={post.title}
                    className="post-card-thumb"
                />
            )}
            <div className="post-card-text">
                <h3 className="post-card-title">{post.title}</h3>
                <p className="post-card-snippet">{post.snippet}</p>
            </div>
        </div>
    </Link>

);

export default PostCard;