import React from 'react';
import "../Faizan's Components/homapage.css"
import { Box,Image,Text } from '@chakra-ui/react';


function Advertisment(props) {
    return (
        <Box border="0.1px solid lightgray" bg="white" w="30%" textAlign='center' height='3rem' position='absolute' ml={'20px'} >
            <Box bg="rgb(241,242,242)" p='0.7rem'></Box>

            <Box >
                <Text fontSize="xs">ADVERTISMENT</Text>
                
                <Image src='https://tma-live.s3.ap-south-1.amazonaws.com/gallery/1627385264519/Masai%20School-Become%20a%20Software%20Developer%20in%2030%20Weeks_page-0001.jpg'></Image>
                <br/>
                <Image src='https://tma-live.s3.ap-south-1.amazonaws.com/gallery/uploads/Thu%20Nov%2011%202021%2009%3A20%3A32%20GMT%2B0000%20%28Coordinated%20Universal%20Time%29.png'></Image>
            </Box>
        </Box>
    );
}

export default Advertisment;