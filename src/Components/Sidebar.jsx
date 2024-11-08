import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar-container">
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <ul className="sidebar-links">
        <li>
          <Link to="/posts" className="sidebar-link">Posts</Link>
        </li>
        <li>
          <Link to="/add-post" className="sidebar-link">Add Post</Link>
        </li>
        <li>
          <Link to="/category" className="sidebar-link">Reports</Link>
        </li>
        <li>
          <Link to="/logout" className="sidebar-link">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
  )
}
