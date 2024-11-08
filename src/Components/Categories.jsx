import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './post.css' // Make sure to create this CSS file

export default function Categories() {
  const [category, setCategories] = useState([])

  const FetchCategories = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/posts/categories/")
      setCategories(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    FetchCategories()
  }, [])

  const handleDelete = async (id) => {
    try {
      const value = window.confirm("Are you sure you want to delete this category?")
      if (value) {
        await axios.delete(`http://127.0.0.1:8000/posts/categories/${id}/`)
        console.log("Deleted category with ID:", id)
        FetchCategories()
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="category-container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {category.length > 0 ? (
            category.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>
                  <button onClick={() => handleDelete(cat.id)} className="delete-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No categories available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
