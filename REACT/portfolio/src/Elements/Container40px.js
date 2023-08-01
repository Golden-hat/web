import React from "react"

export default function Container40({img, text}){
    return(
        <div style={{
            borderRadius: "50px",
            borderColor: "black", 
            boxSizing: "border-box",
            border: "1px solid black", 
            display: "flex",
            margin: "40px",
            justifyContent: "center",
            alignItems: "center"}}>
                {img}
                <p style={{
                    padding:"20px",
                    textAlign:"justify",
                    fontSize: "20px",
                    margin:"0px"}}>
                    {text}
                </p>
        </div>
    )
}