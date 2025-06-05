// src/views/SinglePost.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5173/api/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            {post.image && <img src={post.image} alt={post.title} className="rounded mb-4" />}
            <p className="text-lg">{post.content}</p>
        </div>
    );
};

export default SinglePost;
