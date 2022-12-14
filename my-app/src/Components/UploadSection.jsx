import React, { useState } from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../Redux/AppReducer/action";
import axios from "axios";

const UploadSection = () => {
  const isLogin = useSelector((store) => store.AuthReducer.isAuth);
  const token = useSelector((store) => store.AuthReducer.token);
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  // Dispatching the post function in Redux/action.js
  // It will only trigger when the Title  and Image has a valid input.
  const handleSubmit = () => {
    if (title && image) {
      console.log("clicked");
      dispatch(postData({ title, image }, token, setImage, setTitle));
    } else {
      alert("Both The fields are Required");
    }
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>

          <Box w={{ base: "80%", lg: "50%" }} rounded="lg" mt="4">
            <Input
              placeholder="Enter Title"
              w="100%"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Box>

          <Button bg="green" color="white" mt="8" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default UploadSection;
