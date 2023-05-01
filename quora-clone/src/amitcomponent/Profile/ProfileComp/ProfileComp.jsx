import React, { useState } from 'react';
import { Text, Image,Button } from '@chakra-ui/react';

export default function ProfileComp() {
  const [profile, setProfile] = useState(null);

  return (
    <div>
      {profile === null ? (
        <div  style={{paddingTop:"50px"}}>
          < Image w="100px" ml="120px" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2rR68uhDpE81DXrTBubJUBvqfPHJt7-rZId3XbAlx0SafZ1J7" alt="" />
          <Text>You haven't shared, answered or posted anything yet.</Text>
          <Button mt="20px" _hover={{bg:"rgb(38,99,255)"}} color="white" bg="rgb(38,99,255)">Answer Questions</Button>
        </div>
      ) : (
        <h1>Data Avalaible</h1>
      )}
    </div>
  );
}
