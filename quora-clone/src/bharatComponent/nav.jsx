import { Box, Button, Flex, HStack, Image, Input, Popover, PopoverArrow, PopoverContent, PopoverTrigger, Portal, Spacer, Text, VStack } from '@chakra-ui/react'
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
// import leftarrow from './images/leftarrow.svg';

const Navbar = () => {
    return <>
        <Box py='4px' boxShadow='md'>
            <Box w='72%' m='auto'>
                <Flex align='center'>
                    <Link><Image pr='5px' w='90px' src={quora} /></Link>
                    <Spacer />
                    <Link><Image w='30px' src={home} /></Link>
                    <Spacer />
                    <Link><Image w='30px' src={following} /></Link>
                    <Spacer />
                    <Link><Image w='30px' src={answer} /></Link>
                    <Spacer />
                    <Link><Image w='30px' src={spaces} /></Link>
                    <Spacer />
                    <Link><Image w='30px' src={notification} /></Link>
                    <Spacer />
                    <Input borderRadius='1px' placeholder='Search Quora' w='360px' />
                    <Spacer />
                    <Button mr='15px' borderWidth='2px' px='15px' rounded='50px' bg='white' color='grey' size='sm'>
                        Try Quora +
                    </Button>



                    <Popover>
                        <PopoverTrigger >
                            <Image mr='10px' w='30px' src={lang} />
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent mt='18px' borderColor='white' width='270px' borderRadius={0} border='1px solid gray'>
                                <PopoverArrow />


                                <Box p='30px' textAlign='left'>
                                    <Link>
                                        <Image mr='15px' w='30px' src={lang} />
                                        <Box>Bharat</Box>
                                        {/* <Image mr='15px' w='30px' src={leftarrow} /> */}
                                    </Link>
                                </Box>
                                <hr />
                                <Box px='10px' py='10px'>
                                    <HStack py='5px'>
                                        <Link><Image mr='15px' w='25px' src={messages} /></Link>
                                        <Link pl='100px'><Text fontSize='sm'> Messages</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image mr='15px' w='25px' src={ad} /></Link>
                                        <Link><Text fontSize='sm'>Create Ad</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image mr='15px' w='25px' src={monetize} /></Link>
                                        <Link><Text fontSize='sm'>Monetization</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image mr='15px' w='25px' src={stat} /></Link>
                                        <Link><Text fontSize='sm'>Your content & stats</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image mr='15px' w='25px' src={bookmark} /></Link>
                                        <Link><Text fontSize='sm'>Bookmarks</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image mr='15px' w='25px' src={draft} /></Link>
                                        <Link><Text fontSize='sm'>Drafts</Text></Link>
                                    </HStack>

                                    <HStack py='5px'>
                                        <Link><Image mr='15px' w='25px' src={tryquora} /></Link>
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
                                    <Box mx='15px' my='10px'>
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


                    <Link><Image mr='15px' w='30px' src={lang} /></Link>

                    <Button boxShadow='inner' px='15px' borderRadius='50px 0 0 50px' colorScheme='red' color='white' size='sm'>
                        Add Question
                    </Button>
                    <Button boxShadow='inner' px='15px' borderRadius='0px 50px 50px 0px' colorScheme='red' color='white' size='sm'>
                        <Image color='white' w='30px' src={downarrow} />
                    </Button>

                </Flex>
            </Box>
        </Box>
    </>
}

export { Navbar }