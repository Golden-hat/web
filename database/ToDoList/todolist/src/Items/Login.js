import React from "react"
import Container30 from "./Container30px.js"
import { Link } from "react-router-dom";

const text=
<div style={{padding:"40px"}}>
    <h1 className="log-in" style={{textAlign:"left", margin: "0xp"}}>
        Log In:
    </h1>
    <p style={{textAlign:"left", marginBottom:"0px"}}>
        Username:
    </p>
    <input type="text" style={{
        borderRadius: "8px",
        width:"100%",
        padding:"5px",
        borderColor: "black", 
        boxSizing: "border-box"}}>
    </input>   
    <p style={{textAlign:"left", marginBottom:"0px"}}>
        Password:
    </p>
    <input type="password" style={{
        width:"100%",
        borderRadius: "8px",
        padding:"5px",
        borderColor: "black", 
        boxSizing: "border-box"}}>
    </input>
    <div className="SignUpButtonDiv">
        <button className="SignUpButton">Log In</button>
    </div>
    <p className="DontHaveAcc"style={{textAlign:"center", marginLeft:"40px", marginRight:"40px", marginBottom:"0px", marginTop:"40px"}}>
        Don't have an account yet?
    </p>
    <div  style={{marginBottom:"40px", marginTop:"10px", textAlign:"center"}}>
        <Link to="/SignIn" className="RegHere">Register Here!</Link>
    </div>
</div>

export default function Login(){
    return(
        <div>
            <h1 className='Main_Title'> To Do's!</h1>
        <div className="logContainer" style={{maxWidth:"500px", margin:"auto"}}>
            <Container30 img={""} text={text}></Container30>
        </div>   
        </div>
    );
}

