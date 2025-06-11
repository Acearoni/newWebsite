import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import '../App.css'

const Home = () => {
    const [posts, setPosts] = useState([]); // ✅ Initialized as an array

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/posts") // ✅ Correct backend URL
            .then((res) => setPosts(res.data)) // ✅ Should be an array of posts
            .catch((err) => {
                console.error("Error fetching Home posts:", err);
                setPosts([]); // Prevent .map() from crashing
            });
    }, []);

    return (
        <>
            <h1 to>Welcome To The Blog</h1>
            <div className="post-grid">
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </>
    );
};

export default Home;
