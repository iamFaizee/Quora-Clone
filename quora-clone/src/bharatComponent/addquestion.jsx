import { Box, Button, CloseButton, Flex, HStack, Image, Input, Modal, ModalContent, ModalOverlay, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import spaces from './images/spaces.svg';
import downarrow from './images/downarrow.svg';
import rightfillarrow from './images/rightfillarrow.svg';
import downdarkarrow from './images/downdarkarrow.svg';
import { Bharataction } from '../commonStore/Bharatacred/BharatAction';
import { useContext, useState } from 'react';
import { Store } from '../commonStore/comStore';
import { AuthContext } from '../commonStore/contextapi';
import axios from 'axios';


const Addquestion = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { postuser, setinputdata, postdata, inputdata } = useContext(AuthContext);
    // const [images, setimages] = useState("")

    function call() {
        const ran = Math.ceil(Math.random() * 10);
        //   console.log(ran)
        axios.get(`http://localhost:3000/images/${ran}`).then((res) => {

            postuser(inputdata, res.data.img)
            onClose();
        }).then(()=>{
            axios.get("http://localhost:3000/posts").then((res1) => {
                setinputdata(res1.data)
            })
        })
        

    }


    return <>

        <Button onClick={onOpen} boxShadow='inner' px='10px' h={'29px'} borderRadius='50px 0 0 50px' colorScheme='red' size='sm' maxWidth='110px' minWidth='100px'>
            <Text fontSize='xs'> Add Question</Text>
        </Button>
        <Button onClick={onOpen} boxShadow='inner' h={'29px'} px='10px' borderRadius='0px 50px 50px 0px' colorScheme='red' size='sm'>
            <Image color='white' w='20px' src={downarrow} />
        </Button>

        <Modal isOpen={isOpen} blockScrollOnMount={false} size='3xl' isCentered onClose={onClose}>
            <ModalOverlay />
            <ModalContent h='420px' p='10px' color='gray'>
                <CloseButton size='lg' onClick={onClose} />
                <HStack pb='10px'>
                    <Text w='50%' color='blackAlpha.800' textAlign='center'>Add Question</Text>
                    <Text w='50%' color='blackAlpha.800' textAlign='center'>Create Post</Text>
                </HStack>
                <hr />
                <HStack py='20px' px='10px'>
                    <Image mr='10px' w='25px' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                    <Image w='15px' src={rightfillarrow} />
                    <Button boxShadow='inner' borderRadius='50px' bg='white' border='1px solid silver' size='sm'>
                        <Image w='20px' src={spaces} />

                        <Text pl='5px' fontSize='xs'>Public</Text>
                        <Image color='black' ml={'5px'} w='15px' src={downdarkarrow} />
                    </Button>

                </HStack>
                <Input onChange={(e) => {
                    setinputdata({ data: e.target.value })
                }} variant='flushed' size='lg' placeholder='Start your question with "What","How","Why",etc.' />
                <Input variant='flushed' type='file' size='sm' />
                <Box h={"160px"}></Box>
                <hr />
                <Flex mt={"10px"} mr={'10px'}>
                    <Spacer />
                    <Button onClick={onClose} w={"70px"} mr={'10px'} borderRadius={'20px'}><Text fontSize='xs'>Cancel</Text></Button>
                    <Button onClick={call} w={"130px"} colorScheme='blue' borderRadius={'20px'}><Text fontSize='xs'>Add Question</Text></Button>
                </Flex>
            </ModalContent>
        </Modal>

    </>
}
export { Addquestion };