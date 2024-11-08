import React from 'react'
import "./post.css"
export default function Nav() {
  return (
    <div>
      <nav className='navbar'>
        <div className='lists'>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Posts</li>
        </ul>
        </div>
        <div>
        <button className='btn'>Sign Up</button>
        </div>
      </nav>
    </div>
  )
}
