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
                            
                            
                        </ModalContent>
                    </Modal>
    </>
}

export {Tryquora};