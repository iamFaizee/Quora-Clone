
import { Stack, HStack, VStack, Box } from '@chakra-ui/react'
import { Sidebar } from './Sidebar';
import { Middle } from './Middle';


function Following(props) {
    return (
        //    <div style={{display:"flex",backgroundColor:"#F0F0F0", marginTop:'70px'}}>
        <Box mt={'60px'} ml={'30px'}>
            <Box w="20%">
                <Sidebar />
            </Box>
            <Box w="40%" ml={'300px'}>
                <Middle />
            </Box>
        </Box>



        //    </div>


    )
}
export { Following };