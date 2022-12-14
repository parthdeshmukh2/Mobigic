import React, {useEffect, useState} from "react";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/AppReducer/action";


const Profile = () => {
  const token = useSelector((store) => store.AuthReducer.token);
  const user = useSelector((store) => store.AuthReducer.user);
  const data = useSelector((store)=> store.AppReducer.data);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(token){
      dispatch(getData(token));

    }
     
  },[data]);
// useEffect(()=>{
//   setProfileData(data)
// },[])

  console.log(data);
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
          UserName: {user}
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
        gap="8"
        mt="8"
      >
        {data.map((elem) => (
          <ProductCard key={elem._id} {...elem} />
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default Profile;
