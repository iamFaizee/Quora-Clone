// import React from "react";
import { Sidebar } from "./Sidebar";
import { Middle } from "./Middle";
import { Right } from "./Right";
import { Stack, HStack, VStack, Box } from '@chakra-ui/react'

    function Answer(props){
        return (
           <div style={{display:"flex",backgroundColor:"#F0F0F0", marginTop:'50px'}}>
                <Box w="23%" >
                <Sidebar />
                </Box>
                <Box w="45%">
                <Middle />
                </Box>
                <Box w="30%">
                <Right/>
                </Box>
               
                
           </div>
           
            
        )
    }
    export {Answer};