import React from "react";
import "./Right.css";
import WidgetContent from "./WidgetContent";
import pencil from "./NafisImages/pencil.svg";

function Right() {
  return (
    <div className="widget" style={{marginTop:"10px",width:"270px"}}>
      <div className="widget__header" style={{display:"flex",backgroundColor:"	#F0F0F0",justifyContent:"space-between"}}>
        <h5 ><b>Topics you know about</b></h5>
        <img  style={{marginLeft:"35px",marginTop:"9px",border:"1px solid silver",borderRadius:"60%",height:"29px",padding:"2px"}} src={pencil} alt="" />
        <hr />
      </div>
      <div className="widget__contents">
        <WidgetContent />
      </div>
    </div>
  );
}

export  {Right};