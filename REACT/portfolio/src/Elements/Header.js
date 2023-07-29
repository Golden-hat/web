import React from "react"

/*
    Export is a keyword used by the JSX
    syntax to determine a function that can
    be accessed by other .js files.

    Because you can export many variables from the same file,
    default is used only once in the whole file 👉🏼 to let you 
    import this default variable outside without using brackets {}:
*/
export default function Header(){
    return(
        <div>
            <h1 className = "name">Yassin Pellicer Lamla</h1>    
            <h2 className = "subtitle" style={{margin: "20px"}}>Computer science student in the Polythecnic University of Valencia
            eager to learn new things and explore the world of programming.</h2>
        </div>
    );
}