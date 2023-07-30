import React from "react"
import Container from "./Container.js"

const leftCardText = 
    <div style={{marginLeft:"20px"}}>
        <h1 style={{marginBottom:"20px"}}>
            Hello!
        </h1>
        <p style={{}}>
            My name is <b style={{fontStyle:"italic"}}>Yassin Pellicer.</b> Ever since I was a kid the world of
            <b style={{fontFamily:"monospace", fontSize:"16px"}}> technology</b> has appealed a lot to me. I found the inner workings
            of computers and technology in general almost like magic, and I felt the need to understand it.
        </p>
    </div>

const rightCardText = 
    <div>
        <h1 style={{marginBottom:"20px"}}>
            So far...
        </h1>
        <p style={{marginBottom:"25px"}}>
            My only occupation has been as a <b style={{fontStyle:"italic"}}>waiter</b>, 
            a job that I could easily keep up with university during weekends. I excel at managing big groups of
            people, and foreigners and/or english speakers <b style={{fontFamily:"monospace", fontSize:"16px"}}> are my favourite kind of challenge. </b>
            I am now looking for an entreprise willing to bet on me for formation.
        </p>
    </div>

const imageProfile = 
    <img src={require("./ElementImages/me.png")} alt="" style={{height: "120px"}}></img>

export default function AboutMe(){
    return(
        <div className = "aboutMe" style={{display: "flex", justifyContent:"space-around", marginBottom:"30px"}}>
            <div className = "left-card">
                <h1 style={{fontFamily: "monospace", 
                    fontSize: "5vh", 
                    margin: "0", 
                    textAlign:"center"}}>
                        Who Am I?
                </h1>
                    {<Container img={imageProfile}
                    text = {leftCardText}/>}
            </div>
            <div className = "right-card">
                <h1 style={{fontFamily: "monospace", 
                    fontSize: "5vh", 
                    margin: "0",
                    textAlign:"center"}}>
                    How's been my career?
                </h1>
                    {<Container img={""}
                    text={rightCardText}/> }
            </div>
        </div>
    )
}