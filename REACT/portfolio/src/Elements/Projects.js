import React from "react"
import Container from "./Container.js"

const rightTopCardText = 
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

export default function Projects(){
    return(
        <div>
            <h1 className="MYPROJECTS" style={{textAlign:"center"}}>
                MY PROJECTS
            </h1>
            {<Container img={""} text={rightTopCardText}/>}
        </div>
    )
}