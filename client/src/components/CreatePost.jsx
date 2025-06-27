import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState({});

    const submitHandler = (e) => {
        e.preventDefault()
        const newPost = { title, content, category }
        axios.post('http://localhost:8000/api/posts', newPost)
            .then((response) => {
                console.log(response)
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <h1>Post Creation For Self</h1>
            <form onSubmit={submitHandler}>
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

                <button>SUBMIT POST</button>
            </form>
        </div>
    );
}

export default CreatePost;

