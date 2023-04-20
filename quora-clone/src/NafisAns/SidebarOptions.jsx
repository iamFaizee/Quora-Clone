
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <p style={{marginTop:"10px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Questions</p>
      
      <div className="sidebarOption">
        
      </div>
      <hr /><hr /><hr />
      <div className="sidebarOption">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;Questions for You</p>
      </div>
      <div className="sidebarOption">
        
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;Answer requests</p>
      </div>

      <div className="sidebarOption">
        
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;Drafts</p>
      </div>

      
      
    </div>
  );
}

export default SidebarOptions;