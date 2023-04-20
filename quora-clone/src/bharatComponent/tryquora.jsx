import { Button, CloseButton, HStack, Image, Input, Modal, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'

import spaces from './images/spaces.svg';
import downarrow from './images/downarrow.svg';



const Tryquora=()=>{

    const { isOpen, onOpen, onClose } = useDisclosure()

    return <>
    <Button onClick={onOpen} mr='15px' borderWidth='2px' px='15px' rounded='50px' bg='white' color='grey' size='sm'>
                        <Text fontSize='xs'>Try Quora +</Text>
                    </Button>
                    <Modal isOpen={isOpen} blockScrollOnMount={false} size='3xl' isCentered onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent h='420px' p='10px' color='gray'>
                            <CloseButton size='lg' onClick={onClose}/>
                            <HStack pb='10px'>
                                <Text w='50%' color='blackAlpha.800' textAlign='center'>Add Question</Text>
                                <Text w='50%' color='blackAlpha.800' textAlign='center'>Create Post</Text>
                            </HStack>
                            <hr />
                            <HStack py='20px' px='10px'>
                                <Image mr='10px' w='25px' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                                <Image w='10px' src='https://cdn-icons-png.flaticon.com/512/38/38483.png' />
                                <Button boxShadow='inner' borderRadius='50px' bg='white' border='1px solid silver' size='sm'>
                                    <Image w='20px' src={spaces} />
                                    
                                    <Text pl='5px' fontSize='xs'>hello</Text>
                                    <Image color='black' w='20px' src={downarrow} />
                                </Button>
                                
                            </HStack>
                            <Input variant='flushed' size='lg' placeholder='Start your question with "What","How","Why",etc.' />
                        </ModalContent>
                    </Modal>
    </>
}

export {Tryquora};