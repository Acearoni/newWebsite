import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import '../App.css'

const Personal = () => {
    const [posts, setPosts] = useState([]); // ✅ Initialized as an array

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/posts/category/Personal") // ✅ Correct backend URL
            .then((res) => setPosts(res.data)) // ✅ Should be an array of posts
            .catch((err) => {
                console.error("Error fetching Personal posts:", err);
                setPosts([]); // Prevent .map() from crashing
            });
    }, []);

    return (
        <>
            <h1>Personal Posts</h1>
            <div className="post-grid">
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </>
    );
};

export default Personal;
