import React, { useState } from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UploadSection = () => {
  const isLogin = useSelector((store) => store.AuthReducer.isAuth);
  const navigate = useNavigate();
  const [file, setFile] = useState("");

  const handleSubmit = () => {
    console.log(file);
  };

  return (
    <Box>
      {!isLogin && (
        <Box w="80%" m="auto" mt="16" textAlign="center">
          <Text fontSize="4xl" fontFamily="cursive" fontWeight="600">
            Please Login To Upload Images
          </Text>
          <Button
            mt="16"
            bg="green"
            color="white"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
      )}
      {isLogin && (
        <Box
          w="90%"
          m="auto"
          p="4"
          mt="16"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text
            fontSize="4xl"
            fontFamily="cursive"
            fontWeight="600"
            fontStyle="italic"
            textAlign="center"
          >
            Upload Files Here
          </Text>
          <Box
            border="1px solid black"
            w={{ base: "80%", lg: "50%" }}
            rounded="lg"
            mt="4"
          >
            <Input
              placeholder="Enter Title"
              w="100%"
              border="1px solid black"
              type="text"
            />
          </Box>

          <Box w={{ base: "80%", lg: "50%" }} rounded="lg" mt="4">
            <Input
              placeholder="Enter Title"
              w="100%"
              type="file"
              onChange={(e) => setFile(e.target.files)}
            />
          </Box>

          {/* <Button bg="teal" color="white " mt="4" leftIcon={<BsFillImageFill />}>
        Choose File
      </Button> */}
          <Button bg="green" color="white" mt="8" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default UploadSection;
