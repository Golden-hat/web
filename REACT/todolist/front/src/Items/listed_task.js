import React from "react"
import Quill from 'quill';
import 'react-quill/dist/quill.bubble.css';
import { useEffect, useRef, useState } from "react";

const Tasks = (props) => {

  /* Quill configuration */
  const dateInputRef = useRef(null);
  console.log(props.title)
  const initialValue = props.due.substring(0,10);
  console.log(initialValue)
  const quillRef = useRef(null); // Reference to the editor div
  const [quill, setQuill] = useState(null); // State to hold the Quill instance

  useEffect(() => {
    if (quillRef.current && !quill) {
      const quillInstance = new Quill(quillRef.current, {
        theme: 'bubble',
      });
      setQuill(quillInstance);
      quillInstance.disable(true);
      quillInstance.root.innerHTML = props.description;
    }
  }, [quill]);

  useEffect(() => {
    const dateInput = dateInputRef.current;
    if (dateInput) {
      dateInput.value = initialValue;

      const handleInput = () => {
        dateInput.value = initialValue;
      };
      dateInput.addEventListener('input', handleInput);
      return () => {
        dateInput.removeEventListener('input', handleInput);
      };
    }
  }, []);

  var body =
    <div className="containerSign" style={{ padding: "40px", paddingTop: "10px" }}>
      <p style={{ textAlign: "left", marginTop: "30px", marginBottom: "10px", fontSize: "30px", fontWeight: "bold" }}>
        {props.title}
      </p>
      <div ref={quillRef} style={{ maxHeight: '200px' }} />
      <p id="due_to_header" style={{ textAlign: "left", marginBottom: "10px" }}>
        Due to...
      </p>
      <input type="date" id="due_date" ref={dateInputRef} style={{
        borderRadius: "8px",
        width: "100%",
        padding: "5px",
        borderColor: "black",
        boxSizing: "border-box"
      }}>
      </input>
      <div className="SignUpButtonDiv" style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
        <button className="SignUpButton" style={{ marginTop: "20px", backgroundColor: "rgb(145, 255, 122)" }}>Complete task</button>
        <button className="SignUpButton" style={{ marginTop: "20px", backgroundColor: "rgb(255, 74, 92)" }}>Delete task</button>
        <button className="SignUpButton" style={{ marginTop: "20px", backgroundColor: "rgb(138, 142, 255)" }}>Modify task</button>
      </div>
    </div>

  if (initialValue == null && document.getElementById("due_date") != null && document.getElementById("due_to_header") != null ){
    document.getElementById("due_date").remove()
    document.getElementById("due_to_header").remove()
  }  

  return (
  <div style={{
      borderRadius: "50px",
      borderColor: "black", 
      boxSizing: "border-box",
      border: "1px solid black",
      flexWrap: "wrap",
      backgroundColor: "white",
      margin:"20px",
      width:"auto"
    }}>
      {body}
    </div>
  )
}

export default Tasks