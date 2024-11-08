import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./post.css"

export default function Posts() {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/posts/post/")
      setPosts(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  // Delete post
  const deletePost = async (id) => {
    try {
      const value = window.confirm("Are you sure you want to delete this post?")
      if (value) {
        await axios.delete(`http://127.0.0.1:8000/posts/${id}/`)
        console.log("Deleted post with ID:", id)
        fetchPosts()
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='post-container'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className='post-card' key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p><strong>Category:</strong> {post.category.name}</p>
            <p>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            {post.image && <img src={post.image} alt={post.title} className="post-image" />}
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  )
}
