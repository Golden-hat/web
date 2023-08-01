import React from "react"
import Container40 from "./Container40px.js"
import Container30 from "./Container30px.js"
import Container40Left from "./Container40pxLeft.js"
import MathJax from 'react-mathjax';

/*info*/
const snakeImage = 
    <img src={require("./ElementImages/snake.png")} alt="" style={{height: "300px", borderRadius:"50px", margin:"40px"}}></img>
const SnakeGame=
<div style={{marginRight:"40px"}}>
    <h1 style={{fontFamily:"monospace", marginBottom:"20px"}}>
        Snake Game
    </h1>
    <p>
        The classic snake game <b> done with the vanilla HTML, CSS and Javascript functionalities </b>
        (events, canvas)... without extra libraries or frameworks.  <br></br> <br></br> This one was <b>one of my first
        projects.</b> It involved learning the basics of javascript to develop something I had already created a while back
        in python with the <b>pygame library</b>.
    </p>
</div>

const inlineFormula = `Z_{n+1} = Z_n^2 + C`;
const juliaSet = 
    <img src={require("./ElementImages/fractals.png")} alt="" style={{height: "900px", borderRadius:"50px", marginRight:"40px",
    marginBottom:"40px", marginTop:"40px"}}></img>
const fractals=
<div style={{padding: "40px"}}>
    <h1 style={{fontFamily:"monospace", marginBottom:"20px"}}>
        Fractals
    </h1>
    <p style={{
            justifyContent:"center", 
            alignContent:"center",
            textAlign:"center"}}>
        My interest in these mathematical structures sprung from this <b>Numberphile video:</b> <br></br> <br></br>
        <iframe width="400" height="200" src="https://www.youtube.com/embed/FFftmWSzgmk" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share"></iframe> <br></br> <br></br>
    </p>
    <p style={{
            justifyContent:"center", 
            alignContent:"center",
            textAlign:"justify"}}>
        As we can see in the video, the Julia and Mandlebrot set are <b>2D portrayals that show which complex numbers C diverge </b>
        after a certain number of iterations given a starting point based on the following sequence <br></br> <br></br>
        
        <MathJax.Provider><p><MathJax.Node inline formula={inlineFormula}/></p></MathJax.Provider><br></br>

        Where C (our starting imaginary number) and Z (the first number in the sequence, n = 0) are a 
        <b>complex number with an imaginary component and a real component. <br></br> </b>The <b>only</b> difference between
        a mandlebrot set and a julia set is that the mandlebrot set's Z0 starts off at 0. <br></br> <br></br>
    </p>
    <p style={{
            justifyContent:"center", 
            alignContent:"center",
            textAlign:"center"}}>
        The approach followed in code is quite simple: <br></br> <br></br>
        <img src={require("./ElementImages/fractalCode.png")} alt="" style={{height: "300px"}}></img>
    </p>
</div>

const brickBreaker=
<div style={{padding: "40px"}}>
    <h1 style={{fontFamily:"monospace", marginBottom:"20px"}}>
        Brick breaker
    </h1>
    <p style={{
            justifyContent:"center", 
            alignContent:"center",
            textAlign:"center"}}>
        <img src={require("./ElementImages/brickBreaker.png")} alt="" style={{height: "300px"}}></img> <br></br> <br></br>
    </p>
    <p style={{
            justifyContent:"center", 
            alignContent:"center",
            textAlign:"justify"}}>
        I wanted to recreate this <b>classic old-fashion telephone game</b> in python. The premise of the game
        is as simple as it can get: you guide a ball to collide with a group of blocks, making it bounce against a platform
        controlled by A/D and the arrow keys. <br></br> <br></br> If <b>the ball escapes the screen, you lose. If you break every brick, 
        you win! </b>
        <br></br> <br></br>
        
        <MathJax.Provider><p><MathJax.Node inline formula={inlineFormula}/></p></MathJax.Provider><br></br>

        Where C (our starting imaginary number) and Z (the first number in the sequence, n = 0) are a 
        <b>complex number with an imaginary component and a real component. <br></br> </b>The <b>only</b> difference between
        a mandlebrot set and a julia set is that the mandlebrot set's Z0 starts off at 0. <br></br> <br></br>
    </p>
    <p style={{
            justifyContent:"center", 
            alignContent:"center",
            textAlign:"center"}}>
        The approach followed in code is quite simple: <br></br> <br></br>
        <img src={require("./ElementImages/fractalCode.png")} alt="" style={{height: "300px"}}></img>
    </p>
</div>

/*items*/
const rightCardText = 
    <div>
        <h1 style={{marginBottom:"20px", marginTop:"40px",fontFamily:"Syncopate", textAlign:"center"}}>
            PYTHON PROJECTS
        </h1>
        <Container40 img={""} text={brickBreaker}/>
    </div>

const bottomCardText = 
    <div>
        <h1 style={{marginBottom:"20px", fontFamily:"Syncopate"}}>
            WEB PROJECTS
        </h1>
        <Container40 img={""} text={"aiodsuhfai"}/>
    </div>

const leftCardText = 
    <div>
        <h1 style={{fontFamily:"Syncopate", padding:"0px", textAlign:"center", marginTop:"40px"}}>
            WEB PROJECTS
        </h1>
        <Container40 img={snakeImage} text={SnakeGame}/>   
        <Container40Left img={juliaSet} text={fractals}/>
        <Container40 img={""} text={"aiodsuhfai"}/>
    </div>

export default function Projects(){
    return(
        <div>
            <h1 className="MYPROJECTS" style={{textAlign:"center"}}>
                MY PROJECTS
            </h1>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                {<Container30 img={""} text={leftCardText}/>}
                {<Container30 img={""} text={rightCardText}/>}
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                {<Container30 img={""} text={bottomCardText}/>}
            </div>
        </div>
    )
}