import React from "react"

export default function Container({img, text}){
    return(
        <div style={{
            borderRadius: "50px",
            borderColor: "black", 
            boxSizing: "border-box",
            border: "1px solid black", 
            display: "flex",
            padding: "15px",
            margin: "70px",
            justifyContent:"space-around"}}>
                <img src={img} alt="error" style={{
                height: "150px",
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "20px"}}></img>
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