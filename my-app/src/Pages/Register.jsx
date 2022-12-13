import React, { useState } from "react";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/AuthReducer/action";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = () => {
    if (userName && password) {
      dispatch(registerUser({ userName, password }, navigate));
    }
  };

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
          Register
        </Text>
        <Input
          placeholder="Enter UserName"
          type="text"
          mt="4"
          onChange={(e) => setUserName(e.target.value)}
        />

        <Input
          placeholder="Enter UserName"
          type="password"
          mt="4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button bg="green" color="white" mt="8" onClick={handleSignUp}>
          Register
        </Button>

        <Box display="flex" mt="8">
          <Text fontSize="lg" fontFamily="cursive">
            Already have an Account?
          </Text>
          <Text
            fontSize="lg"
            fontFamily="cursive"
            color="blue"
            textDecoration="underline"
            cursor="pointer"
          >
            Login Here
          </Text>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Register;
