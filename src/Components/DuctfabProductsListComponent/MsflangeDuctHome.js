import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { DifferentTypesOfMsflangeDucts } from "./DifferentTypesOfMsflangeDuct";
import { AdvantagesofMsFlange } from "./AdvantagesofMsFlange"
import ProductsNavbar from "./ProductsNavbar";

export const MsflangeDuctHome = () => {
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
        MS - FLANGE DUCT
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
            
            MS - FLANGE DUCTMS flange duct, often referred to as “Mild Steel
            flange duct is a type of ductwork<br></br> used in heating,
            ventilation, and air conditioning systems It is constructed
            <br></br> primarily from mild steel and features flanged edges for
            ease of connection and <br></br> installation
          </Text>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
          
          <Image src="/Msflange.png" alt="Msflange" />
        </Box>
      </Box>
       <Box >
      <DifferentTypesOfMsflangeDucts />
      <AdvantagesofMsFlange />
      </Box>
      <Box>
        <Shrivedhaafooter />
      </Box>
    </Box>
  );
};
