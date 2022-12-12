import React from 'react'
import {Box, Text, Image, Button} from "@chakra-ui/react";

const ProductCard = (elem) => {
  return (
    <Box shadow='2xl' rounded='xl' display='flex' flexDirection='column' p='4' alignItems='center'>
        <Image w='80%' h='250px' src={elem.image}  />
      <Text mt='2' fontSize='xl' fontWeight='500'>{elem.title}</Text>
      <Text mt='2' fontSize='xl' fontWeight='500'>{elem.code}</Text>
      <Box w='100%' display='flex' justifyContent='space-around'>
        <Button bg='green' color='white'>Download</Button>
        <Button bg='red' color='white'>Delete</Button>
      </Box>
    </Box>
  )
}

export default ProductCard
