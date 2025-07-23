import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteButton = ({ postId }) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (!confirmDelete) return;

        const token = localStorage.getItem('token');

        axios.delete(`http://localhost:8000/api/posts/${postId}`, {
            headers: {
                Authorization: token
            }
        })
            .then(() => {
                alert("Post deleted successfully.");
                navigate('/');
            })
            .catch(err => {
                console.error("Error deleting post:", err);
                alert("Something went wrong while deleting.");
            });
    };

    return (
        <button onClick={handleDelete} className="delete-btn">
            🗑️ Delete Post
        </button>
    );
};

export default DeleteButton;
