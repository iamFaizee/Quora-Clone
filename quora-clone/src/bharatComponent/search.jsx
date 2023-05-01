import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputLeftElement, Modal, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useContext, useState } from 'react';
import { AuthContext } from '../commonStore/contextapi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { postuser, setinputdata, postdata, inputdata,toggle,settoggle, setpostdata } = useContext(AuthContext);
    const [indata, setindata]=useState("");
    const navigate=useNavigate();

    function call(){
       axios.get(`http://localhost:3000/posts/?q=${indata}`).then((res)=>{
        console.log(res.data)
        setpostdata(res.data)
        navigate('/home')
       })
       
    }

    return (
        <>

            <InputGroup onClick={onOpen} size='sm' w='320px' marginRight={'20px'}>
                <InputLeftElement
                    pointerEvents="none"
                    color='gray'
                    fontSize='0.9em'
                    children={<SearchIcon />}
                />
                <Input borderRadius='1px' size='sm' placeholder='Search Quora' w='320px' />
            </InputGroup>

            <Modal onClose={onClose} isOpen={isOpen} >
                <ModalOverlay />
                <ModalContent top={"-3.34rem"} right={"-5.8rem"} >
                    <InputGroup size='sm' borderRadius='1px' w='525px'>
                        <InputLeftElement
                            pointerEvents="none"
                            color='gray'
                            fontSize='0.9em'
                            children={<SearchIcon />}

                        />
                        <Input borderRadius='1px' placeholder='Search Quora' bg={"white"} onChange={(e)=>{setindata(e.target.value)}} onKeyDown={(e)=>{if(e.key === 'Enter'){
                                call()
                        }}} />
                    </InputGroup>
                </ModalContent>
            </Modal>
        </>
    )
}

export { SearchBox }