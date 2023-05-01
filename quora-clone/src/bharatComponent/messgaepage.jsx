import { Box, Button, Flex, HStack, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";


const Messagepage = () => {

    return <>
        <Box w={'72%'} m={'auto'} h={'93vh'} border={'0.5px solid #E0E0E0'} mt={'50px'}>
            <Flex>
                <Box w={'32%'} borderRight={'0.5px solid #E0E0E0'} h={'93vh'}>
                    <Text borderBottom={'1px solid #E0E0E0'} p={'16px 5px 10px 15px'}>Messages</Text>
                    <Text m={'8% 0 0 35%'} fontSize='md' color={'silver'} >No messages</Text>
                </Box>
                <Box w={'68%'} >

                    <InputGroup m={'17px'} w={'95.5%'} size='sm'>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color={'gray'}/>}
                            
                        />
                        <Input type='tel' placeholder='Enter a name' borderRadius={'2px'}/>
                    </InputGroup>

                    <Flex  mt={'17px'} mx={'17px'} w={'95.5%'} border={'0.5px solid #E0E0E0'}>
                        <Link><Text my={'10px'} mx={'15px'} color={'gray'}><strong>Aa</strong> </Text> </Link>
                    </Flex>
                    <Input pb={'105px'} pt={'30px'} focusBorderColor='#E0E0E0' placeholder="Type a message..." mx={'17px'} w={'95.5%'} borderRadius={'2px'}/>
                    <Box  mx={'17px'} align='right' mt={'20px'} >
                    <Button colorScheme="blue" borderRadius={'50px'} w={'100px'}>Send</Button>
                    </Box>
                    
                </Box>
            </Flex>
        </Box>
    </>
}
export { Messagepage };