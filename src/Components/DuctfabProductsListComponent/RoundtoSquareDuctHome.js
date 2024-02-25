import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { DiffetentTypesOfRoundDucts } from "./DifferentTypesOfRoundDuct";
import { AdvantagesOfRoundSquare } from "./AdvantagesOfRoundSquare";
import ProductsNavbar from "./ProductsNavbar";

export const RoundtoSquareDuctHome = () => {
  
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
        ROUND TO SQUARE DUCT
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
            
            Round-to-square duct transitions offer several benefits in HVAC
            Heating, Ventilation, <br></br>and Air Conditioning systems  and
            other industrial applications where different duct shapes need to be
            connected.<br></br> Here are the key benefits of using
            round-to-square duct transitions
          </Text>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
        
          <Image src="/round.png" alt="round" />
        </Box>
      </Box>
      <Box>
        <Box>
        <DiffetentTypesOfRoundDucts />
        <AdvantagesOfRoundSquare />
        </Box>
        <Box>
          <Shrivedhaafooter />
        </Box>
      </Box>
    </Box>
  );
};
