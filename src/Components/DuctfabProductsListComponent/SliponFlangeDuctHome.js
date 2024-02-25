import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { DifferentTypesOfSliponFlange } from "./DifferentTypesOfSliponFlange";
import { AdvantagesofSlipOnFlangeDuct } from "./AdvantagesofSlipOnFlangeDuct";
import ProductsNavbar from "./ProductsNavbar";
export const SliponFlangeDuctHome = () => {
  
  return (
    <Box>
      <Box>
          <ProductsNavbar/>
      </Box>
      <Box position="relative" mt='100px' >
      
      <Image h='400px'
      w='100%' src="/ductoproductonlistimage2.jpg" />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
      >
        <Heading fontSize="32px" bg='#fff' color="#ff5c23"  fontFamily="poppins">
        SLIP ON FLANGE DUCT
        </Heading>
      </Box>
    </Box>
      <Box
        display={{ base: "flex", lg: "flex" }}
        flexDir={{ base: "column", lg: "row" }}
        w={{ base: "1100px", lg: "1400px" }}
        justifyContent={{ base: "space-around", lg: "space-around" }}
        mt={{ base: "30px", lg: "20px" }}
        
        
        m={{ base: "20px", lg: "20px" }}
       
        
      >
        <Box mt="30px" ml={{ base: "200px", lg: "0px" }}>
          
         
          <Text lineHeight="8" mt="20px" >
            A slip-on flange duct is a type of ductwork that incorporates
            slip-on flanges <br></br> also known as lap joint flanges into its
            design  These flanges have a distinctive design <br></br> with a raised
            circular collar that fits over the end of the duct.
          </Text>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
          <Image src="/slipon.png" alt="slipon" />
        </Box>
      </Box>
      <Box>
        <Box >
        <DifferentTypesOfSliponFlange />
        <AdvantagesofSlipOnFlangeDuct />
        </Box>
        <Box>
          <Shrivedhaafooter />
        </Box>
      </Box>
    </Box>
  );
};
