import React from "react"
import Container30 from "./Container30px.js"

const SnakeGame=
<div style={{padding:"40px"}}>
    <h1 className="log-in" style={{textAlign:"left"}}>
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
    <p className="DontHaveAcc"style={{textAlign:"center", marginLeft:"40px", marginRight:"40px", marginBottom:"0px", marginTop:"40px"}}>
        Don't have an account yet?
    </p>
    <div  style={{marginBottom:"40px", marginTop:"10px", textAlign:"center"}}>
        <a className="RegHere" href="" style={{}}>Register Here!</a>
    </div>
</div>

export default function Login(){
    return(
        <div className="logContainer" style={{maxWidth:"500px", margin:"auto"}}>
            <Container30 img={""} text={SnakeGame}></Container30>
        </div>   
    );
}

