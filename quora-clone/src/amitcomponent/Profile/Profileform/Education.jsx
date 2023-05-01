
import React from 'react';
import { Box, Input, Icon, Text } from '@chakra-ui/react';
import { BiBriefcase } from 'react-icons/bi';
export default function Education() {
  return (
    <div style={{ width: '540px', height: '320px', border: '1px solid grey', position: 'fixed' }}>
      <div style={{marginBottom:"8px" ,overflow: 'auto', height: '100%'}}>
        <Box display="flex" w='100%' p={2}>
          <Icon p="2px" bg="gray.200" borderRadius="full" ml="6px" as={BiBriefcase} boxSize={6} />
          <Text fontWeight="bold">Add education credential</Text>
        </Box>
        <hr />
        <Box pt={4} pl={4}>
          <Text fontWeight="bold">School</Text>
          <Input w="95%" placeholder='School Name' />
        </Box>
        <Box pt={4} pl={4}>
          <Text fontWeight="bold">Primary major</Text>
          <Input w="95%" placeholder='Type of Search' />
        </Box>
        <Box pt={4} pl={4}>
          <Text fontWeight="bold">Secondary major</Text>
          <Input w="95%" placeholder='Type of Search' />
        </Box>
        <Box pt={4} pl={4}>
          <Text fontWeight="bold">Degree type</Text>
          <Input w="95%"  placeholder='MFA' />
        </Box>
        <Box pt={4} pl={4}>
          <Text fontWeight="bold">Graduation year</Text>
          <Input w="95%" type='date' placeholder='Type of Search' />
        </Box>
       
      </div>
    </div>
  )
}
