import React from "react";
import "./AnswerBox.css"


    function Answerbox(props){
        return(
            <div className="Answerbox">
                <div className="answerinfo">
                    Question here
                </div>
                <br /> 
                <div className="answerbtn" style={{display:"flex",gap:"40px",}}>
                    <button style={{backgroundColor:"red", borderRadius:"5px"}}>Answer</button>
                    <button>Follow</button>
                    <button>Pass</button>
                </div>

            </div>
        )
    }
    export {Answerbox}