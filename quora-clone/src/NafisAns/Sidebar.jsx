import React from "react";
import SidebarOptions from "./SidebarOptions";
import "./Sidebar.css";
import { Box } from "@chakra-ui/react";

function Sidebar() {
  return (
    // <div className="sidebar" style={{marginTop:"10px",position:"fixed", width:'20%'}}>
    //   <SidebarOptions />
    // </div>
    <>
    <Box pr="1rem" position={'fixed'} >
      <SidebarOptions />
    </Box>
    </>
  );
}

export  {Sidebar};