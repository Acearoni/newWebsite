import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/post.css";

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/posts/${id}`)
            .then((res) => setPost(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div className="single-post-container">
            <h1 className="single-post-title">{post.title}</h1>
            {post.image && (
                <img
                    src={post.image}
                    alt={post.title}
                    className="single-post-image"
                />
            )}
            <p className="single-post-content">{post.content}</p>
        </div>
    );
};

export default SinglePost;
