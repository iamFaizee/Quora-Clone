import React from "react";
import "./AnswerBox.css"
import Anspic from"./NafisImages/Answer.svg"
import Follpic from"./NafisImages/follow.svg"
import Passpic from "./NafisImages/Pass.svg"
import cross from "./NafisImages/cross.svg"
import downvote from "./NafisImages/downvot.svg"
import threedots from "./NafisImages/3dots.svg"

    function Answerbox(props){
        return(
            <div className="Answerbox" style={{marginTop:"-10px"}}>
                <hr />
                <div className="answerinfo" style={{width:"150%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>5 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 8h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 0</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>

                <hr />
                <div className="answerinfo" style={{width:"147%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>Why are Linux users so obnoxious?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>
                    <hr />

                <div className="answerinfo" style={{width:"156%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>Are any NASA videos fake?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>2 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 14h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 15</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>

            
                <hr />

                <div className="answerinfo" style={{width:"137%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What are the concepts introduced in OOPs?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>10 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 20h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 8</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>

                <hr />
                <div className="answerinfo" style={{width:"137%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>Why do people answer questions on Quora?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>9 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 4h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 19</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>
                <hr />
                <div className="answerinfo" style={{width:"136%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>Will the Apple store in India give a discount?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>7 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 14h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 10</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>
                <hr />

                <div className="answerinfo" style={{width:"114%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>How can Minecraft enhance the learning outcomes of students?
</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>8 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 8h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 8</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>


            </div>
        )
    }
    export {Answerbox}