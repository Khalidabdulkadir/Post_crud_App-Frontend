/* Forms.js */
import React, { useState } from 'react';
import './Forms.css';

export default function Forms() {
    const[name, setName] = useState("");
    const[password, setPassword] = useState("");
    const[select, setSelect] = useState("ali");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, password, select);
    }
  return (
    <div className="form-container">
        <form className="styled-form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <select onChange={(e) => setSelect(e.target.value)}>
                <option value="khalid">khalid</option>
                <option value="mohan" >mohan</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
}
