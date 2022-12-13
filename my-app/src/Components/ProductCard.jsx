import React, { useState } from "react";
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

const ProductCard = (elem) => {
  const [modal, setModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [uniqueCode, setUniqueCode] = useState("");

  const handleDelete = () => {
    if (uniqueCode == 123456) {
      alert("Deleted Successfully");
      setModal(false);
    } else {
      alert("Please Enter Correct Code");
    }
  };

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
        {elem.title}
      </Text>
      <Text mt="2" fontSize="xl" fontWeight="500">
        {elem.code}
      </Text>
      <Box w="100%" display="flex" justifyContent="space-around">
        <Button bg="green" color="white">
          Download
        </Button>
        <Button bg="red" color="white" onClick={() => setModal(true)}>
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
              <Button bg="red" color="white" onClick={handleDelete}>
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
