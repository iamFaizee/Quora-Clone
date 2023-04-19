import React from 'react';
import {Box,Image,Text,Button,Spacer,Center,IconButton,ButtonGroup,AspectRatio } from '@chakra-ui/react'
import {RxThickArrowUp,RxThickArrowDown} from 'react-icons/rx'
import {BsArrowRepeat} from 'react-icons/bs';
import {IoIosMore} from 'react-icons/io';
import {FaRegComment} from 'react-icons/fa';

function PostContainer(props) {
    return (
        // <div className='postContainer'>
        //     <div className="post-top-section">
        //         <img src="" alt="" />
        //     </div>
        // </div>

        <Box bg="white" mt="1rem" mb="2rem" border="0.1px solid lightgray">
            <Box display="flex" gap="0.5rem" alignItems="center" p="0.6rem 0.5rem">
                <Box>
                    <Image 
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
                    alt="profile"
                    w="2.2rem"
                    borderRadius="50%"
                    />
                </Box>
                
                <Box>
                    <Text fontSize="xs" as="b">Username</Text>
                    <Text fontSize="xs">Location</Text>
                </Box>
            </Box>

            <Box p="0 0.5rem">
                <Text as="b" align="left">
                    Why coders are not happy?
                </Text>
            </Box>
            <Box p="0 0.5rem">
                <Text fontSize="sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis omnis harum excepturi facilis dignissimos eius quaerat cumque libero voluptas.
                </Text>
            </Box>
            <AspectRatio ratio={4/3} mt="0.6rem" borderTop="0.2px solid lightgray" borderBottom="0.2px solid lightgray">
                <Center>
                    <Image 
                    src="https://pps.whatsapp.net/v/t61.24694-24/306871371_5701200359969598_1800013178050149430_n.jpg?ccb=11-4&oh=01_AdT5qw6deAGYGjpVkZga_03n6nPmBUZHIHFneqTj4nsanQ&oe=644D0E74"
                    alt="post"
                    boxSize="sm" 
                    // border="1px solid black"
                    />
                </Center>
            </AspectRatio >

            <Box display="flex" p="0.2rem 0.5rem" alignItems="center">
                <Box display="flex" p="0.2rem 0.5rem" alignItems="center" gap="0.8rem">
                    <ButtonGroup size='sm' isAttached variant='outline'>
                        <Button borderRadius='5rem' leftIcon={<RxThickArrowUp/>}>
                            <Text fontSize="xs">Upvote</Text>
                        </Button>
                        <IconButton borderRadius='5rem' icon={<RxThickArrowDown/>} />
                    </ButtonGroup>

                    <IconButton borderRadius='5rem' size='sm' isAttached variant='outline' icon={<FaRegComment/>} />
                    <IconButton borderRadius='5rem' size='sm' isAttached variant='outline' icon={<BsArrowRepeat/>} />
                </Box>
                <Spacer />
                <Box>
                    <IconButton borderRadius='5rem' size='sm' isAttached variant='outline' icon={<IoIosMore/>} />
                </Box>
            </Box>
        </Box>
    );
}

export default PostContainer;