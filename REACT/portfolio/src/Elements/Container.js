import React from "react"

export default function Container({img, text}){
    return(
        <div style={{
            borderRadius: "50px",
            borderColor: "black", 
            boxSizing: "border-box",
            border: "1px solid black", 
            display: "flex",
            padding: "30px",
            margin: "70px",
            justifyContent: "center",
            alignItems: "center"}}>
                {img}
                <p style={{
                    textAlign:"justify",
                    padding:"20px",
                    margin:"0px",
                    fontSize: "20px"}}>
                    {text}
                </p>
        </div>
    )
}