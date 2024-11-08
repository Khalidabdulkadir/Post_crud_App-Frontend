import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./post.css";

export default function AddPost() {
  const [createPost, setCreatePost] = useState({
    title: "",
    body: "",
    date: "",
    category: "",
    image: null
  });

  const [categories, setCategories] = useState([]);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/posts/categories/");
        setCategories(response.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Handle input changes for text and date fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatePost({
      ...createPost,
      [name]: value,
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setCreatePost({
      ...createPost,
      image: e.target.files[0],
    });
  };

  // Submit form data, including the image and category selection
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", createPost.title);
    formData.append("body", createPost.body);
    formData.append("date", createPost.date);
    formData.append("category", createPost.category);
    formData.append("image", createPost.image);

    try {
      const response = await axios.post('http://127.0.0.1:8000/posts/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Post created:", response.data);
      setCreatePost({
        title: "",
        body: "",
        date: "",
        category: "",
        image: null
      });
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder='Enter title'
          value={createPost.title}
          onChange={handleChange}
        />
        <textarea
          name="body"
          id="body"
          placeholder='Enter the Body here'
          value={createPost.body}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          id="date"
          value={createPost.date}
          onChange={handleChange}
        />
        <select
          name="category"
          value={createPost.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
