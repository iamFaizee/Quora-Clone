
import React from "react";
import "./SidebarOption.css";
import { Box, Button, Text } from "@chakra-ui/react";

function SidebarOptions() {
  return (<>
  <Box ml="9rem" mt={'1rem'}>
        <Box p="0.4rem 0.6rem" borderBottom={"0.5px solid lightgray"} w="60%">
          <Text>Questions</Text>
        </Box>
        <Box>
          <Button size="sm" width="60%" justifyContent="flex-start">Questions for you</Button>
          <Button size="sm" width="60%" justifyContent="flex-start">Answer request</Button>
          <Button size="sm" width="60%" justifyContent="flex-start">Drafts</Button>
        </Box>
      </Box>
  </>
    // <div className="sidebarOptions" style={{marginLeft:"-50px",marginTop:"30px"}}>
    //   <p style={{ display: "flex", marginLeft: "70px",color:"#686868",borderBottom:"1px solid lightgray", paddingBottom:"7px",fontSize:"14px" }}>
    //      <b>Questions</b></p>
         
    //   <div style={{display:"flex",flexDirection:"column",width:"200px",marginLeft:"155px",alignItems:"flex-start"}}>
       
      
    //     <div className="sidebarOption"  >
    //       <p style={{fontSize:"13px",color:"#606060",paddingRight:"57px", paddingTop:"0px"}}>Questions for You</p>
    //     </div>
    //     <div className="sidebarOption" style={{marginTop:"-7px",marginBottom:"-7px"}} >

    //       <p style={{fontSize:"13px",color:"#606060",paddingRight:"65px"}}>
    //         Answer requests</p>
    //     </div>

    //     <div className="sidebarOption" >

    //       <p style={{fontSize:"13px",color:"#606060",paddingRight:"130px"}}>
    //         Drafts</p>
    //     </div>
    //   </div>




    // </div>
  );
}

export default SidebarOptions;