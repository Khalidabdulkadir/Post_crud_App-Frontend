import React from 'react';
import './App.css';
import Posts from './Components/Posts';
import AddPost from './Components/AddPost';
import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Categories from './Components/Categories';

function App() {
  const brands = { brand: "Toyota", model: "Corolla" };
  
  return (
    <div className="App">
      {/* Use only one BrowserRouter */}
      <BrowserRouter>
        <Nav />
        <Sidebar/>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/category" element={<Categories />} />
          {/* Add more routes here as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
