import React from 'react';
import {Box,Image,Button, Flex,Spacer} from '@chakra-ui/react'
import {BsQuestionSquare} from 'react-icons/bs'
import {TbEdit} from 'react-icons/tb'
import {FiEdit2} from 'react-icons/fi'

function AddPost(props) {
    return (
        <Box border="0.1px solid lightgray" maxW="100%" bg="white" borderRadius="4px">
           
            <Box display="flex" gap="1rem" p="0.5rem">
                <Image 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
                alt="profile"
                w="2rem"
                borderRadius="50%"
                />

                <Button bg="rgb(241,242,242)" 
                border="0.4px solid lightgray"
                borderRadius="2rem"
                p="0 18rem 0 1.8rem"
                color="grey"
                size="sm"
                >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What do you want to ask or share?
                </Button>
            </Box>

            <Flex bg="white" p="0 0.3rem 0.3rem 0.3rem">
                <Button
                leftIcon={<BsQuestionSquare/>}
                borderRadius="2rem"
                size="sm"
                w="100%"
                bg = "white"
                >
                    Ask
                </Button>

                <Spacer/>

                <Button
                leftIcon={<TbEdit/>}
                borderRadius="2rem"
                size="sm"
                w="100%"
                bg = "white"
                >
                    Answer
                </Button>

                <Spacer/>

                <Button
                leftIcon={<FiEdit2/>}
                borderRadius="2rem"
                size="sm"
                w="100%"
                bg = "white"
                >
                    Post
                </Button>
            </Flex>

        </Box>
    );
}

export default AddPost;