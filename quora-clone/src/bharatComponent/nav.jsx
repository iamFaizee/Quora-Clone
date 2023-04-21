import { Box, Button, CloseButton, Flex, HStack, Image, Input, InputGroup, InputLeftElement, Modal, ModalContent, ModalOverlay, Popover, PopoverArrow, PopoverContent, PopoverTrigger, Portal, Spacer, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import quora from './images/quora.svg';
import home from './images/home.svg';
import following from './images/following.svg';
import answer from './images/answer.svg';
import spaces from './images/spaces.svg';
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
import { Tryquora } from './tryquora';
import { SearchIcon } from '@chakra-ui/icons';
import { SearchBox } from './search';
import { Addquestion } from './addquestion';

const Navbar = () => {

    return <>
        <Box py='0px' boxShadow='md'>
            <Box w='72%' m='auto'>
                <Flex align='center' className='hello'>
                    <Link><Image mr='20px' maxWidth='90px' minWidth='90px' src={quora} /></Link>
                    <Spacer />
                    <Link><Image minWidth='30px' mr='10px' src={home} /></Link>
                    <Spacer />
                    <Link><Image w='30px' mr='10px' src={following} /></Link>
                    <Spacer />
                    <Link><Image w='30px' mr='10px' src={answer} /></Link>
                    <Spacer />
                    <Link><Image w='30px' mr='10px' src={spaces} /></Link>
                    <Spacer />
                    <Link><Image w='30px' mr='10px' src={notification} /></Link>
                    <Spacer />

                    <SearchBox />

                    <Spacer />
                    <Tryquora />

                    <Popover>
                        <PopoverTrigger >
                            <Image mr='10px' w='25px' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent mt='15px' width='270px' borderRadius={0} boxShadow='dark-lg' >
                                <PopoverArrow />


                                <Box pt='22px' pl='15px' pb='18px' textAlign='left'>
                                    <Link>
                                        <Image mr='11px' w='43px' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                                        <Box pt='10px'><Text fontSize='18px'><strong>User Profile</strong></Text></Box>

                                    </Link>
                                </Box>
                                <hr />
                                <Box px='10px' py='10px' >
                                    <HStack py='5px'>
                                        <Link ><Image w='25px' src={messages} /></Link>
                                        <Link pl='100px'><Text fontSize='sm'> Messages</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image w='25px' src={ad} /></Link>
                                        <Link><Text fontSize='sm'>Create Ad</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image w='25px' src={monetize} /></Link>
                                        <Link><Text fontSize='sm'>Monetization</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image w='25px' src={stat} /></Link>
                                        <Link><Text fontSize='sm'>Your content & stats</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image w='25px' src={bookmark} /></Link>
                                        <Link><Text fontSize='sm'>Bookmarks</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image w='25px' src={draft} /></Link>
                                        <Link><Text fontSize='sm'>Drafts</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image w='25px' src={tryquora} /></Link>
                                        <Link><Text fontSize='sm'>Try Quora+</Text></Link>
                                    </HStack>
                                </Box>
                                <Box boxShadow='md' >
                                    <hr />
                                    <VStack align='left' p='20px'>
                                        <Link><Text fontSize='xs'>Dark Mode</Text></Link>
                                        <Link><Text fontSize='xs'>Setting</Text></Link>
                                        <Link><Text fontSize='xs'>Languages</Text></Link>
                                        <Link><Text fontSize='xs'>Help</Text></Link>
                                        <Link><Text fontSize='xs'>Logout</Text></Link>
                                    </VStack>
                                    <hr />
                                    <Box mx='15px' my='10px' color='gray'>
                                        <HStack>
                                            <Link><Text fontSize='xs' p='2px'>About ·</Text></Link>
                                            <Link><Text fontSize='xs'>Careers ·</Text></Link>
                                            <Link><Text fontSize='xs'>Terms ·</Text></Link>
                                            <Link><Text fontSize='xs'>Privacy ·</Text></Link>
                                        </HStack>

                                        <HStack>
                                            <Link><Text fontSize='xs' p='2px'>Acceptable Use ·</Text></Link>
                                            <Link><Text fontSize='xs'>Business ·</Text></Link>
                                            <Link><Text fontSize='xs'>Press ·</Text></Link>
                                        </HStack>

                                        <HStack>
                                            <Link><Text fontSize='xs' p='2px'>Your Ad Choices · </Text></Link>
                                            <Link><Text fontSize='xs'>Grievance Officer</Text></Link>
                                        </HStack>
                                    </Box>
                                </Box>
                            </PopoverContent>
                        </Portal>
                    </Popover>


                    <Popover>
                        <PopoverTrigger>
                            <Link><Image mr='15px' w='30px' src={lang} /></Link>
                        </PopoverTrigger>
                        <PopoverContent boxShadow='dark-lg' mt='10px' w='230px' h='170px' borderRadius='3px'>
                            <PopoverArrow />
                            <VStack align='left' >
                                <Link><Text fontSize='sm' pt='10px' px='10px'>Languages</Text></Link>
                                <hr />
                                <Flex w='100%' px='10px' py='6px' alignItems='center'>
                                    <Box bg='blue.400' borderRadius='50%' px='7px' py='6px' mr='7px' fontSize='xs' color='white'>EN</Box>
                                    <Link><Text fontSize='sm'>English</Text></Link>
                                    <Spacer />
                                    <Image w='20px' h='22px' src='https://www.vhv.rs/dpng/d/564-5642958_circle-blue-check-mark-hd-png-download.png' />
                                </Flex>
                                <hr />
                                <Link><Text fontSize='xs' px='10px'>Add language</Text></Link>
                                <Link><Text fontSize='xs' px='10px'>See all languages</Text></Link>
                            </VStack>
                        </PopoverContent>
                    </Popover>

                    <Addquestion />



                </Flex>
            </Box>
        </Box>
    </>
}

export { Navbar }