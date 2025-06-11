import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import '../App.css'

const Social = () => {
    const [posts, setPosts] = useState([]); // ✅ Initialized as an array

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/posts/category/Social") // ✅ Correct backend URL
            .then((res) => setPosts(res.data)) // ✅ Should be an array of posts
            .catch((err) => {
                console.error("Error fetching Social posts:", err);
                setPosts([]); // Prevent .map() from crashing
            });
    }, []);

    return (
        <>
            <h1>Social Posts</h1>
            <div className="post-grid">
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </>
    );
};

export default Social;
