import React from "react";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Login = () => {
  return (
    <Box>
      <Navbar />
      <Box
        w={{ base: "90%", md: "60%", lg: "30%" }}
        display="flex"
        flexDirection="column"
        p="4"
        m="auto"
        mt="16"
        alignItems="center"
        boxShadow="2xl"
        rounded="xl"
      >
        <Text fontSize="2xl" fontWeight="700" fontFamily="cursive">
          Login
        </Text>
        <Input placeholder="Enter UserName" type="text" mt="4" />

        <Input placeholder="Enter UserName" type="password" mt="4" />

        <Button bg="green" color="white" mt="8">
          Login
        </Button>

        <Box display="flex" mt="8">
          <Text fontSize="lg" fontFamily="cursive">
            Don't have an Account?
          </Text>
          <Text
            fontSize="lg"
            fontFamily="cursive"
            color="blue"
            textDecoration="underline"
            cursor="pointer"
          >
            Register Here
          </Text>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;
