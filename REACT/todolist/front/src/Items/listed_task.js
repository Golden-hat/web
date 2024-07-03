import React from "react"
import { useEffect, useRef } from 'react';

const Tasks = () => {

  const dateInputRef = useRef(null);
  const initialValue = '2024-07-04';

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

  return (
  <div style={{
      borderRadius: "50px",
      borderColor: "black",
      boxSizing: "border-box",
      border: "1px solid black",
      flexWrap: "wrap",
      backgroundColor: "white",
      margin:"20px"
    }}>
      <div className="containerSign" style={{ padding: "40px", paddingTop: "10px" }}>
        <p style={{ textAlign: "left", marginTop: "30px", marginBottom: "10px", fontSize:"30px", fontWeight:"bold" }}>
          Doing the laundry
        </p>
        <p style={{ textAlign: "left", marginTop: "20px", marginBottom: "10px" }}>

        </p>
        <p style={{ textAlign: "left", marginBottom: "10px" }}>
          Very important!Very important!Very important!Very important!Very important!Very important!Very important!Very important!Very important!Very important!Very important!Very important!Very important!Very important!
        </p>
        <p style={{ textAlign: "left", marginBottom: "10px" }}>
          Due to...
        </p>
        <input type="date" ref={dateInputRef} style={{
          borderRadius: "8px",
          width: "100%",
          padding: "5px",
          marginBottom: "30px",
          borderColor: "black",
          boxSizing: "border-box"
        }} value="2024-07-04">
        </input>
        <div className="SignUpButtonDiv" style={{position:"relative", display:"flex", justifyContent:"space-between"}}>
          <button className="SignUpButton" style = {{ backgroundColor:"rgb(145, 255, 122)"}}>Complete task</button>
          <button className="SignUpButton" style = {{ backgroundColor:"rgb(255, 74, 92)"}}>Delete task</button>
          <button className="SignUpButton" style = {{ backgroundColor:"rgb(138, 142, 255)"}}>Modify task</button>
        </div>
      </div>
    </div>
  )
}

export default Tasks