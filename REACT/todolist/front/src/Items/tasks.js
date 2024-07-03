import React from "react"
import { Link } from "react-router-dom";
import AddNewTask from "./task.js";
import Tasklist from "./tasklist.js";
import { useLocation } from 'react-router-dom';

const not_logged =
  <div>
    <h1 className='Main_Title_Tasks'> Looks like you aren't logged in yet...</h1>
    <div className="TaskPage" style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ width: "500px" }}>
        <h1 style={{ fontSize: "20px", textAlign: "center" }}> Please log in or register if you haven't yet</h1>
        <div style={{ display: "flex" }}>
          <div>
            <p className="DontHaveAcc" style={{ textAlign: "center", marginLeft: "40px", marginRight: "40px", marginBottom: "0px", marginTop: "40px" }}>
              Don't have an account yet?
            </p>
            <div style={{ marginBottom: "40px", marginTop: "10px", textAlign: "center" }}>
              <Link to="/SignIn" className="RegHere">Register Here!</Link>
            </div>
          </div>
          <div>
            <p
              className="DontHaveAcc"
              style={{
                textAlign: "center",
                marginLeft: "40px",
                marginRight: "40px",
                marginBottom: "0px",
                marginTop: "40px",
              }}
            >
              Already have an account?
            </p>
            <div
              style={{
                marginBottom: "40px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <Link to="/" className="RegHere">
                Log In!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

const Tasks = () => {
  const location = useLocation();
  const user = location.state || {};
  
  if (Object.keys(user).length == 0) {
    var selection = not_logged;
  }
  else {
    selection =
      <div>
        <div style ={{
          backgroundColor:"rgb(105, 162, 255)",
          color:"white",
          justifyContent:"space-between",
          display: "flex",
        }}>
          <h1 className='Main_Title_Tasks' style={{marginLeft:"80px", marginTop:"20px", marginBottom:"20px"}}> Welcome, {user[0].name}.</h1>
          <div className="SignUpButtonDiv" style={{ alignContent:"center", marginTop:"7px"}}>
            <button className="SignUpButton" style={{marginRight:"80px", marginTop:"20px", marginBottom:"20px"}}>Log out</button>
          </div>
        </div>

        <div className="TaskPage" style={{ display:"flex", justifyContent:"space-between", padding:"40px"}}>
          <div style={{width: "800px", height:"603px", margin:"40px", boxSizing:" border-box"}}>
            <AddNewTask></AddNewTask>
          </div>
          <div style={{ flexDirection: "column", justifyContent: "space-around", maxWidth: "1000px", margin:"40px" }}>
            <Tasklist></Tasklist>
          </div>
        </div>
      </div>
  }
  
  return (
    selection
  )
}

export default Tasks
