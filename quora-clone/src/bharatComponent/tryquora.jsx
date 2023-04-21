import { Box, Button, Center, CloseButton, Container, Flex, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Modal, ModalContent, ModalOverlay, Popover, PopoverArrow, PopoverContent, PopoverTrigger, Portal, Radio, RadioGroup, Spacer, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import quora from './images/quora.svg';
import quoraplus from './images/quoraplus.svg';
import diablead from './images/diablead.svg';
import unlock from './images/unlock.svg';
import trial from './images/trial.svg';
import lang from './images/lang.svg';
import notification from './images/notification.svg';
import messages from './images/messages.svg';
import monetize from './images/monetize.svg';
import stat from './images/stat.svg';
import bookmark from './images/bookmark.svg';
import draft from './images/draft.svg';
import ad from './images/ad.svg';
import tryquora from './images/tryquora.svg';
import downarrow from './images/downarrow.svg';
import { useState } from 'react';
import React from 'react';


const Tryquora = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('1')

    return <>
        <Button onClick={onOpen} mr='15px' borderWidth='2px' px='15px' rounded='50px' bg='white' color='grey' size='sm'>
            <Text fontSize='xs'>Try Quora +</Text>
        </Button>
        <Modal isOpen={isOpen} blockScrollOnMount={false} size='2xl' isCentered onClose={onClose}>
            <ModalOverlay />
            <ModalContent h='745px' mt={'150px'} color='gray' borderRadius={'10px'} >
                <CloseButton size='lg' mt={'10px'} onClick={onClose} position={'absolute'} zIndex={'4'} />
                <Center borderRadius={'10px 10px 0 0'} bg={'red.50'} h={'100px'} textAlign={'center'} boxShadow='md'><Image mt='-30px' maxWidth='110px' minWidth='110px' src={quora} /></Center>
                    
                <Center><Text mt={'5px'} color={'black'} fontSize='2xl'><stong>Join Quora +</stong></Text></Center>

                <Box p={'40px 20px 0px 20px'}>
                    <HStack mr={'-7px'} >
                        <Box w={'32%'} h={'150px'} borderRadius={'10px'} bg={'red.50'} p={'30px 0px 10px 20px'} border={'0.5px solid silver'}>
                            <Image maxWidth='40px' minWidth='40px' mb={'17px'} src={diablead} />
                            Browse Quora ad‑free
                        </Box>
                        <Box w={'32%'} h={'150px'} borderRadius={'10px'} bg={'red.50'} p={'30px 0px 10px 20px'} border={'0.5px solid silver'}>
                            <Image maxWidth='40px' minWidth='40px' mb={'17px'} src={unlock} />
                            Unlock millions of answers
                        </Box>
                        <Box w={'32%'} h={'150px'} borderRadius={'10px'} bg={'red.50'} p={'30px 0px 10px 20px'} border={'0.5px solid silver'}>
                            <Image maxWidth='40px' minWidth='40px' mb={'17px'} src={trial} />
                            Try it free for 30 days</Box>
                    </HStack>


                    <RadioGroup onChange={setValue} value={value} >
                        <HStack mt={'20px'} mr={'-17px'}>
                            <VStack border={'0.5px solid silver'} w={'48%'} align={'left'} p={'5px 0 5px 10px'}>
                                <HStack>
                                    <Radio value='1'></Radio>
                                    <Text fontSize='sm' color={'black'}>Yearly</Text>
                                    <Text fontSize='xs' px={'8px'} py={'2px'} borderRadius={'10px'} bg={'blue.500'} color={'white'}>Save 43%</Text>
                                </HStack>
                                <Text fontSize='xs' pl={'25px'}>$3.99/mo</Text>
                            </VStack>

                            <VStack border={'0.5px solid silver'} w={'48%'} align={'left'} p={'5px 0 5px 10px'}>
                                <HStack>
                                    <Radio value='2'></Radio>
                                    <Text fontSize='sm' color={'black'}>Monthly</Text>
                                </HStack>
                                <Text fontSize='xs' pl={'25px'}>$6.99/mo</Text>
                            </VStack>
                        </HStack>
                    </RadioGroup>
                    <Flex mt={'5px'}>
                        <Text>30-day free trial</Text>
                        <Spacer />
                        <Text>$0.00</Text>
                    </Flex>
                    <Flex mt={'5px'}>
                        <Text>Starting May 25, 2023</Text>
                        <Spacer />
                        <Text>$47.88/yr</Text>
                    </Flex>
                    <Text mt={'5px'} fontSize='xs'>Your subscription will renew automatically each year. Cancel at any time in settings.</Text>
                    <Text mt={'5px'} fontSize='xs'>By signing up for a subscription, you agree to Quora's Subscriber Terms of Service.</Text>
                    <Button mt={'10px'} colorScheme='yellow' w={'100%'}><Center><strong><Flex> <Text color={'blue'}>Pay</Text><Text color={'blue.500'}>Pal</Text></Flex></strong></Center></Button>

                    <Text mt={'5px'}>------------------------------------------------OR-----------------------------------------------</Text>
                    <InputGroup mt={'5px'}>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='$'
                        />
                        <Input placeholder='Card number' />
                        <InputRightElement w={'190px'} children={<Input
                            
                            type="date"
                        />} />
                    </InputGroup>
                    <Text mt={'5px'} fontSize='xs'>Existing subscriptions will also be charged to this card. You may receive a temporary authorization charge to validate your card. <Link>Learn more.</Link> </Text>
                    <Button mt={'5px'} borderRadius={'20px'} w={'100%'} colorScheme='blue'><Center>Try 30 Days Free Trial</Center></Button>
                </Box>
            </ModalContent>
        </Modal>
    </>
}

export { Tryquora };