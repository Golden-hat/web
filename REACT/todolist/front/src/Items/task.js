import React from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const Task = () => {

  /* Quill configuration */
  const [value, setValue] = useState('');
  const editorElement = document.querySelector('.ql-editor');
    if (editorElement) {
      editorElement.setAttribute('spellcheck', 'false');
    }

  return (
    <div style={{
      borderRadius: "50px",
      borderColor: "black",
      boxSizing: "border-box",
      border: "1px solid black",
      flexWrap: "wrap",
      backgroundColor: "white"
    }}>
      <div className="containerSign" style={{ padding: "40px", paddingTop: "10px" }}>
        <p style={{ textAlign: "left", marginTop: "30px", marginBottom: "10px", fontSize:"30px", fontWeight:"bold" }}>
          Add New Task:
        </p>
        <p style={{ textAlign: "left", marginTop: "20px", marginBottom: "10px" }}>
          Title:
        </p>
        <input type="text" style={{
          borderRadius: "8px",
          width: "100%",
          padding: "5px",
          borderColor: "black",
          boxSizing: "border-box"
        }}>
        </input>
        <p style={{ textAlign: "left", marginBottom: "10px" }}>
          Description:
        </p>
        <ReactQuill theme="snow" value={value} onChange={setValue} style ={{ borderRadius:"10px" }} />
        <p style={{ textAlign: "left", marginBottom: "10px" }}>
          Due to...
        </p>
        <input type="date" style={{
          borderRadius: "8px",
          width: "100%",
          padding: "5px",
          marginBottom:"30px",
          borderColor: "black",
          boxSizing: "border-box"
        }}>
        </input>
        <div className="SignUpButtonDiv">
          <button className="SignUpButton">Add Task</button>
        </div>
      </div>
    </div>
  )
}

export default Task