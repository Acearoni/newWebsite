import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const Local = () => {
    const [posts, setPosts] = useState([]); // ✅ Initialized as an array

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/posts/category/Local") // ✅ Correct backend URL
            .then((res) => setPosts(res.data)) // ✅ Should be an array of posts
            .catch((err) => {
                console.error("Error fetching Local posts:", err);
                setPosts([]); // Prevent .map() from crashing
            });
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post) => (
                <PostCard key={post._id} post={post} />
            ))}
        </div>
    );
};

export default Local;
