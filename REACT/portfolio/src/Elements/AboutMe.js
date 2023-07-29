import React from "react"
import Container from "./ImgText.js"

const leftCardText = 
    <div>
        <h1 style={{margin:"0"}}>
            Hello!
        </h1>
        <p style={{marginBottom:"0"}}>
            My name is <b style={{fontStyle:"italic"}}>Yassin Pellicer.</b> Ever since I was a kid the world of
            <b style={{fontFamily:"monospace", fontSize:"16px"}}> technology</b> has appealed a lot to me. I found the inner workings
            of computers and technology in general almost like magic, and I felt the need to understand it.
        </p>
    </div>

const rightCardText = 
    <div>
        <h1 style={{margin:"0"}}>
            So far...
        </h1>
        <p style={{marginBottom:"20px"}}>
            My only occupation has been as a <b style={{fontStyle:"italic"}}>waiter</b>, 
            a job that I could easily keep up with university during weekends. I excel at managing big groups of
            people and foreigners and/or english speakers <b style={{fontFamily:"monospace", fontSize:"16px"}}> are my favourite kind of challenge. </b>
            I am now looking for an entreprise willing to bet on me for formation.
        </p>
    </div>

export default function AboutMe(){
    return(
        <div className = "aboutMe">
            <div className = "left-card">
                <h1 style={{fontFamily: "monospace", fontSize: "3vw", margin: "0", textAlign:"center"}}>
                    Who Am I?
                </h1>
                {<Container img={require("./ElementImages/—Pngtree—color glare computer free map_4651718.png")}
                text = {leftCardText}/>}
            </div>
            <div className = "right-card">
                <h1 style={{fontFamily: "monospace", fontSize: "3vw", margin: "0", textAlign:"center"}}>
                    How's been my career?
                </h1>
                {<Container img={""}
                text={rightCardText}/> }
            </div>
        </div>
    )
}