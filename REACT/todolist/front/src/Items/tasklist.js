import React from "react"
import ReactQuill from 'react-quill';
import { useState } from 'react';
import Listed_task from "./listed_task";

const Tasks = () => {
  return (
  <div style={{
    borderRadius: "50px",
    borderTopRightRadius:"0px",
    borderBottomRightRadius:"0px",
    borderColor: "black",
    boxSizing: "border-box",
    border: "1px solid black",
    backgroundColor: "white",
  }}>
    <div className="containerSign" style={{ 
      padding: "40px",
      paddingTop: "10px",
      height:"603px",
      overflowX:"hidden",
      overflowY:"scroll",
      boxSizing:" border-box",
      scrollbars:"right"
    }}>
    <p style={{ textAlign: "left", marginLeft: "20px", marginTop: "30px", fontSize:"40px", fontWeight:"bold"}}>
      Pending Tasks:
    </p>
      <Listed_task></Listed_task>
      <Listed_task></Listed_task>
      <Listed_task></Listed_task>
    </div>
  </div>
  )
}

export default Tasks