import React from "react"
import Container from "./ImgText.js"

export default function AboutMe(){
    return(
        <div className = "aboutMe">
            <div className = "left-card">
                <h1 style={{fontFamily: "monospace", fontSize: "60px", margin: "0", marginBottom: "40px", textAlign:"center"}}>
                    Who Am I?
                </h1>
                {<Container img={require("./ElementImages/—Pngtree—color glare computer free map_4651718.png")}
                text={"Hello. My name is Yassin Pellicer. Ever since I was a kid the world of technology has appealed a lot to me. I found the inner workings of computers and technology in general almost like magic, and I felt the need to understand it."}/> }
            </div>
            <div className = "right-card">
                <h1 style={{fontFamily: "monospace", fontSize: "60px", margin: "0", marginBottom: "40px", textAlign:"center"}}>
                    How's been my career?
                </h1>
                {<Container img={require("./ElementImages/—Pngtree—color glare computer free map_4651718.png")}
                text={"Hello. My name is Yassin Pellicer. Ever since I was a kid the world of technology has appealed a lot to me. I found the inner workings of computers and technology in general almost like magic, and I felt the need to understand it."}/> }
            </div>
        </div>
    )
}