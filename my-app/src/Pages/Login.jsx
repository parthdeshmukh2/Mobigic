import React from "react";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/AuthReducer/action";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userName && password) {
      dispatch(userLogin({ userName, password }, navigate));
    } else {
      alert("Please fill both the details");
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
          Login
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

        <Button bg="green" color="white" mt="8" onClick={handleLogin}>
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
            onClick={()=> navigate('/register')}
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
