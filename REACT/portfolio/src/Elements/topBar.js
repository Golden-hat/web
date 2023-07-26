import React from "react"

/*
    Export is a keyword used by the JSX
    syntax to determine a function that can
    be accessed by other .js files.

    Because you can export many variables from the same file,
    default is used only once in the whole file 👉🏼 to let you 
    import this default variable outside without using brackets {}:
*/
export default function TopBar(){
    return(
        <nav className="NavBar">
            <div className="AboutMe">
                <button className="navButton">
                    About Me
                </button>    
            </div>
            <div className="ContactsGit"> 
                <button className="navButton">
                    Contact
                </button>
                <button className="navButton">
                    Github and social media!
                </button>
            </div>
        </nav>
    );
}