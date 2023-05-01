import React from "react";
import star from "./NafisImages/star.svg"
    function Question(props){
        return(
            <div style={{display:"flex",padding:"10px", gap:"10px", backgroundColor:"white",paddingLeft:"17px"}}>
                <img style={{backgroundColor:"#B92B27",borderRadius:"5px",padding:"2.5px"}} width={"25px"} src={star}/>
                <p style={{color:"gray",fontSize:"14px",marginTop:"2px"}}>Questions for you</p>
               
            </div>
            
        )
    }
    export {Question}