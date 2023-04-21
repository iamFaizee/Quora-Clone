import React from "react";
import star from "./Images/star.svg"
    function Question(props){
        return(
            <div style={{display:"flex",marginLeft:"10px", gap:"10px"}}>
                <img style={{backgroundColor:"red"}} width={"30px"} src={star}/>
                <p>Questions for you</p>
            </div>
        )
    }
    export {Question}