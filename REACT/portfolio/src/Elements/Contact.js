import React from "react"
import Projects from './Projects'
import Container40 from "./Container40px.js"
import Container30 from "./Container30px.js"
import Container40Left from "./Container40pxLeft.js"

export default function Contact(){
    return(
        <div style={{background: `linear-gradient(to bottom, rgba(255,255,255,1) 40%, 
        rgba(255,255,255,0)), url(${require("./ElementImages/newyork.jpeg")})`,
        MarginBottom: "50px", backgroundSize:"cover"}}>
            <h1 style={{textAlign:"center", fontStyle:"italic", fontSize:"150px"}}>
                Contact
            </h1>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                 
            </div>
        </div>
    )
}