import React from 'react'
import {Box, Text, Input, Button} from "@chakra-ui/react";
import {BsFillImageFill} from "react-icons/bs"

const UploadSection = () => {
  return (
    <Box w='90%' m='auto'  p='4' mt='16' display='flex' flexDirection='column' alignItems='center'>
        <Text fontSize='4xl' fontFamily='cursive' fontWeight='600' fontStyle='italic' textAlign='center'>Upload Files Here</Text>
<Box border='1px solid black' w={{base:'80%', lg:'50%'}} rounded='lg' mt='4'>
<Input placeholder='Enter Title'  w='100%' border='1px solid bcalck'/>
</Box>
      
        <Button bg='teal' color='white ' mt='4' leftIcon={<BsFillImageFill />}>Choose File</Button>
        <Button bg='green' color='white' mt='8'>Submit</Button>
      
    </Box>
  )
}

export default UploadSection
