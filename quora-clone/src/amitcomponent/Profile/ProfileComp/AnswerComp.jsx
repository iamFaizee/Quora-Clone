import React from 'react'
import { useState } from 'react';
import { Text, Image,Button } from '@chakra-ui/react';
export default function AnswerComp() {
    const [answer,setAnswer]=useState(null);
  return (
    <div>
        {
         answer===null? <div  style={{paddingTop:"50px"}}>
         < Image w="100px" ml="120px" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2rR68uhDpE81DXrTBubJUBvqfPHJt7-rZId3XbAlx0SafZ1J7" alt="" />
         <Text>You haven't shared, answered or posted anything yet.</Text>
         
       </div>: <h1>Data Avalaible</h1>  
        }
    </div>
  )
}
