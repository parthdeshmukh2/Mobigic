import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import UploadSection from "../Components/UploadSection";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <UploadSection />
      
      <Footer />

    
    </Box>
  );
};

export default HomePage;
