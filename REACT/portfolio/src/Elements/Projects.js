import React from "react"
import Container from "./Container40px.js"
import Container70 from "./Container70px.js"

/*info*/

const snakeImage = 
    <img src={require("./ElementImages/snake.png")} alt="" style={{height: "400px", borderRadius:"50px", margin:"20px"}}></img>
const SnakeGame=
    <div>
        <h1 style={{fontFamily:"monospace", marginBottom:"20px"}}>
            Snake Game!
        </h1>
        <p>
            The classic snake game <b>done with the vanilla HTML, CSS and Javascript functionalities </b>
            (events, canvas)... without extra libraries or frameworks.
        </p>
    </div>

/*items*/

const leftCardText = 
    <div>
        <h1 style={{marginBottom:"20px", fontFamily:"Syncopate"}}>
            WEB PROJECTS asdf asd
        </h1>
        <Container img={""} text={"aiods asdasdf asdfasd fasdf asdf asdf asdfas dfuhfai asd asd fasdf asdfa sdf asdf asdfa sdf asdf asdf s"}/>
    </div>

const bottomCardText = 
    <div>
        <h1 style={{marginBottom:"20px", fontFamily:"Syncopate"}}>
            WEB PROJECTS
        </h1>
        <Container img={""} text={"aiodsuhfai"}/>
    </div>

const rightCardText = 
    <div>
        <h1 style={{fontFamily:"Syncopate", padding:"0px", textAlign:"center"}}>
            WEB PROJECTS
        </h1>
        <Container img={snakeImage} text={SnakeGame}/>   
        <Container img={""} text={"aiodsuhf asdfa sdf asdfa sdfasdf asdf asdfa sdfas dfasd fasd fai"}/>
        <Container img={""} text={"aiodsuhfai"}/>
    </div>

export default function Projects(){
    return(
        <div>
            <h1 className="MYPROJECTS" style={{textAlign:"center"}}>
                MY PROJECTS
            </h1>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                {<Container70 img={""} text={rightCardText}/>}
                {<Container70 img={""} text={leftCardText}/>}
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                {<Container70 img={""} text={bottomCardText}/>}
            </div>
        </div>
    )
}