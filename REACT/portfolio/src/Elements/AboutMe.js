import React from "react"
import Container from "./Container30px.js"

const leftCardText = 
    <div style={{padding: "40px"}}>
        <h1 style={{marginBottom:"20px"}}>
            Hello!
        </h1>
        <p>
            My name is <b style={{fontStyle:"italic"}}>Yassin Pellicer.</b> Ever since I was a kid the world of
            <b style={{fontFamily:"monospace", fontSize:"16px"}}> technology</b> has appealed a lot to me. I found the inner workings
            of computers and technology in general almost like magic, and I felt the need to understand it.
        </p>
    </div>

const rightCardText = 
    <div style={{padding: "40px",}}>
        <h1 style={{marginBottom:"20px"}}>
            So far...
        </h1>
        <p>
            My only occupation has been as a <b style={{fontStyle:"italic"}}>waiter</b>, 
            a job that I could easily keep up with university during weekends. I excel at managing big groups of
            people, and foreigners and/or english speakers <b style={{fontFamily:"monospace", fontSize:"16px"}}> are my favourite kind of challenge. </b>
            I am now looking for an entreprise willing to bet on me for formation.
        </p>
    </div>

const imageProfile =
    <img src={require("./ElementImages/me.png")} alt="" style={{width:"100%", height:"auto", objectFit:"contain", maxHeight:"200px", margin:"40px"}}></img>

export default function AboutMe(){
    return(
        <div className = "aboutMe" style={{justifyContent:"space-around", margin:"60px", marginBottom:"60px"}}>
            <div className = "cardsAboutMe" style={{justifyContent:"center", display:"flex"}}>
                {<Container img={imageProfile}
                text = {leftCardText}/>}
                {<Container img={""}
                text = {rightCardText}/>}
            </div>
        </div>
    )
}