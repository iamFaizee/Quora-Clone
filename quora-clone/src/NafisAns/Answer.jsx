import React from "react";
import { Sidebar } from "./Sidebar";
import { Middle } from "./Middle";
import { Right } from "./Right";
import { Stack, HStack, VStack, Box } from '@chakra-ui/react'

    function Answer(props){
        return (
           <div style={{display:"flex",backgroundColor:"lightgray"}}>
                <Box w="20%">
                <Sidebar />
                </Box>
                <Box w="60%">
                <Middle />
                </Box>
                <Box w="20%">
                <Right/>
                </Box>
               
                
           </div>
           
            
        )
    }
    export {Answer};