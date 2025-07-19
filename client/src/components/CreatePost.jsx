import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/create.css';

const CreatePost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState({});
    const [image, setImage] = useState(null);

    const submitHandler = (e) => {
        console.log('Submit Handler Triggered ✅');
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", category);
        if (image) {
            formData.append("image", image);
        }

        axios.post('http://localhost:8000/api/posts', formData)
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((err) => {
                if (err.response && err.response.data.errors) {
                    setErrors(err.response.data.errors);
                } else {
                    console.log(err);
                }
            });
    };

    return (
        <div className="create-post-container">
            <h1>Post Creation For Self</h1>
            <form onSubmit={submitHandler} encType="multipart/form-data" className="create-post-form">

                <label>Title:</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                {errors.title && <p className="error-text">{errors.title.message}</p>}

                <label>Content:</label>
                <textarea onChange={(e) => setContent(e.target.value)} value={content} />
                {errors.content && <p className="error-text">{errors.content.message}</p>}

                <label>Category:</label>
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">SELECT A CATEGORY</option>
                    <option value="Local">Local</option>
                    <option value="Personal">Personal</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Social">Socials</option>
                </select>

                <label>Image:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <button type="submit">SUBMIT POST</button>
            </form>
        </div>
    );
}

export default CreatePost;

