import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";

const data = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "idsgdifhg",
    code: "123456",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "idsgdifhg",
    code: "123456",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "idsgdifhg",
    code: "123456",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "idsgdifhg",
    code: "123456",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "idsgdifhg",
    code: "123456",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "idsgdifhg",
    code: "123456",
  },
  {
    id: "7",
    image:
      "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "idsgdifhg",
    code: "123456",
  },
];

const Profile = () => {
  return (
    <Box>
      <Navbar />

      <Box w="90%" m="auto" mt="8">
        <Text
          fontSize="xl"
          fontFamily="cursive"
          fontStyle="italic"
          fontWeight="600"
        >
          UserName: parthdeshmukh99
        </Text>
      </Box>

      <Box
        w="90%"
        m="auto"
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap='8'
        mt='8'
      >
        {data.map((elem) => (
          <ProductCard key={elem.id} {...elem} />
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default Profile;
