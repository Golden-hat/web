import React from "react"
import Container30 from "./Container30px.js"

export default function Contact(){
    return(
        <div style={{background: `linear-gradient(to bottom, rgba(255,255,255,1) 40%, 
        rgba(255,255,255,0)), url(${require("./ElementImages/newyork.jpeg")})`,
        MarginBottom: "50px", backgroundSize:"cover"}}>
            <h1 className="titleImportant">
                CONTACT
            </h1>
            <p style={{fontFamily:"Montserrat", textAlign:"center", marginTop:"50px", marginBottom:"70px", fontSize:"20px", marginLeft:"20px", marginRight:"20px"}}>
                You can find all my projects and their source code (along with many more) in my Github Repositories:
                <br></br> <br></br>
                <a href="https://github.com/Golden-hat?tab=repositories">Go to my Github site</a>
            </p>
            <p style={{fontFamily:"Montserrat", textAlign:"center", marginTop:"50px", fontSize:"20px", marginLeft:"20px", marginRight:"20px"}}>
                Here is my CV, with all my contact information and my previous experience.
            </p>
            <div style={{display:"flex", justifyContent:"space-around", marginTop:"50px"}}>
                <Container30 img={<img className="yassin" src={require("./ElementImages/YASSIN.png")} alt="" style={{height:"1200px",
                padding:"50px"}}></img>}/>
            </div>
        </div>
    )
}