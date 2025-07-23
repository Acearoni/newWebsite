import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/post.css";
import DeleteButton from '../components/DeleteButton';


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

    console.log("Image path:", post.image);

    return (
        <div className="single-post-container">
            <h1 className="single-post-title">{post.title}</h1>
            {post.image && (
                <img
                    src={`http://localhost:8000${post.image}`}
                    alt={post.title}
                    className="single-post-image"
                />
            )}
            <p className="single-post-content">{post.content}</p>

            {localStorage.getItem('token') && (
                <DeleteButton postId={post._id} />
            )}
        </div>

    );
};



export default SinglePost;
