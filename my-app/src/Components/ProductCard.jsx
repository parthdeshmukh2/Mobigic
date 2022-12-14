import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import { deleteData, getData } from "../Redux/AppReducer/action";
import {saveAs} from "file-saver";

const ProductCard = (elem) => {
  const [modal, setModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [uniqueCode, setUniqueCode] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((store)=> store.AuthReducer.token)

  const handleDownLoad = () => {
    if (uniqueCode == elem.uniqueCode) {
      let url = elem.image;
      saveAs(url, elem.title)
      alert("Downloded Successfully ");
      setModal(false);
    } else {
      alert("Please Enter Correct Code");
    }
  };

  const handleDelete = () => {
   dispatch(deleteData(elem._id, token));
   console.log("Clicked");
  }


  return (
    <Box
      shadow="2xl"
      rounded="xl"
      display="flex"
      flexDirection="column"
      p="4"
      alignItems="center"
    >
      <Image w="80%" h="250px" src={elem.image} />
      <Text mt="2" fontSize="xl" fontWeight="500">
       Title: {elem.title}
      </Text>
      <Text mt="2" fontSize="xl" fontWeight="500">
        Code: {elem.uniqueCode}
      </Text>
      <Box w="100%" display="flex" justifyContent="space-around">
        <Button bg="green" color="white" onClick={() => setModal(true)}>
          Download
        </Button>
        <Button bg="red" color="white" onClick={handleDelete} >
          Delete
        </Button>
      </Box>

      {modal && (
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Item</ModalHeader>
            <ModalCloseButton onClick={() => setModal(false)} />
            <ModalBody>
              <Input
                placeholder="Enter Unique Code"
                onChange={(e) => setUniqueCode(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => setModal(!modal)}
              >
                Cancle
              </Button>
              <Button bg="red" color="white" onClick={handleDownLoad}>
                Confirm Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default ProductCard;
