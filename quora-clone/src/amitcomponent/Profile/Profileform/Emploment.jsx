import React from 'react';
import { Box, Input, Icon, Text } from '@chakra-ui/react';
import { BiBriefcase } from 'react-icons/bi';
import { useState } from 'react';
import { Checkbox } from '@chakra-ui/react'

export default function Emploment(props) {
  const [data, setData] = useState(props.editdata);
  
  const handleClick = () => {
    props.onChange(data);
  };
  handleClick();
console.log(data);
  return (
    <div style={{ width: '540px', height: '320px', border: '1px solid grey', position: 'fixed' }}>
      <div style={{marginBottom:"8px" ,overflow: 'auto', height: '100%'}}>
        <Box display="flex" w='100%' p={2}>
          <Icon p="2px" bg="gray.200" borderRadius="full" ml="6px" as={BiBriefcase} boxSize={6} />
          <Text fontWeight="bold">Add employment credential</Text>
        </Box>
        <hr />
        <Box pt={4} pl={4}>
          <Text fontWeight="bold">Position</Text>
          <Input   
            onChange={(e) =>
              setData({
                ...data,
                work: e.target.value,
              })
            }  w="95%" placeholder='Web Developer' />
        </Box>
        <Box pt={4} pl={4}>
          <Text fontWeight="bold">Company/Organization</Text>
          <Input w="95%" placeholder='Type of Search' />
        </Box>
        <Box pt={4} pl={4}>
          <Text fontWeight="bold">Start Year</Text>
          <Input onChange={(e) => {
           const year = e.target.value.split("-")[0]; 
              setData({
              ...data,
               date: year,
    });
  }} w="95%" type='date' placeholder='Type of Search' />
        </Box>
        <Box pt={4} pl={4}>
          <Text fontWeight="bold">End Date</Text>
          <Input w="95%" type='date' placeholder='Type of Search' />
        </Box>
        <Box pb={4} pt={4} pl={4} >
        <Checkbox defaultChecked>I currently work here</Checkbox>
        </Box>
      </div>
    </div>
  );
}