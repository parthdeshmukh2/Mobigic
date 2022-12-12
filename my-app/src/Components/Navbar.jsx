import React from 'react'
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image
  } from '@chakra-ui/react';
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useState } from 'react';


const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.300', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLogin, setIsLogin] = useState(false);

    return (
      <>
        <Box bg={useColorModeValue('gray.300', 'gray.900')} px={4} w='90%' m='auto' rounded='xl'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box><Image w={{base:'15%', md:'10%',lg:'4%'}} src='https://mobigic.com/img/mobigic_logo.svg' /></Box>
  
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>

                {!isLogin && <Button bg='green' color='white'>Login</Button>}
     
              {isLogin &&   <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWvXdcjNuTkrkDCYKZRtWwZ-emiiDJdP6sUb7VRshRA&s'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWvXdcjNuTkrkDCYKZRtWwZ-emiiDJdP6sUb7VRshRA&s'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Profile</MenuItem>
                  
                  </MenuList>
                </Menu>
}
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
}

export default Navbar
