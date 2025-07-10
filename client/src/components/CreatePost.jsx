import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState({});
    const [image, setImage] = useState(null);

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     const newPost = { title, content, category }
    //     axios.post('http://localhost:8000/api/posts', newPost)
    //         .then((response) => {
    //             console.log(response)
    //             navigate('/')
    //         })
    //         .catch((err) => {
    //             console.log(err.response.data.errors)
    //             setErrors(err.response.data.errors)
    //         })
    // }

    const submitHandler = (e) => {
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
        <div>
            <h1>Post Creation For Self</h1>
            <form onSubmit={submitHandler} encType="multipart/form-data">
                <label>Title:</label>
                <input type='text' onChange={(e) => setTitle(e.target.value)} value={title}></input>
                {
                    errors.title ?
                        <p>{errors.title.message}</p> :
                        null
                }


                <label>Content:</label>
                <textarea type='text' onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                {
                    errors.content ?
                        <p>{errors.content.message}</p> :
                        null
                }

                <label>Category:</label>
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">SELECT A CATEGORY</option>
                    <option value="Local">Local</option>
                    <option value="Personal">Personal</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Socials">Socials</option>
                </select>

                <label>Image:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <button>SUBMIT POST</button>
            </form>
        </div>
    );
}

export default CreatePost;

