import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";

import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";

import { DifferentTypesOfLpplenumterminal } from "./DifferentTypesOfLpplenumterminal";
import { AdvantagesofLpPlenumTerminalbox } from "./Advantagesof LpPlenumTerminalbox";
import ProductsNavbar from "./ProductsNavbar";
export const LpplenumterminalBoxHome = () => {
  return (
    <Box>
      <Box>
        <ProductsNavbar />
      </Box>
      <Box position="relative" mt='100px' >
      
      <Image h='400px'
      w='100%' src="/ductoproductonlistimage2.jpg" />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -30%)"
        textAlign="center"
      >
        <Heading fontSize="32px" bg='#fff' color="#ff5c23" fontFamily="poppins">
        LP PLENUM TERMINAL BOX
        </Heading>
      </Box>
    </Box>
      <Box
        display={{ base: "flex", lg: "flex" }}
        flexDir={{ base: "column", lg: "row" }}
        w={{ base: "1100px", lg: "1400px" }}
        justifyContent={{ base: "space-around", lg: "space-around" }}
        mt={{ base: "30px", lg: "0px" }}

        
        m={{ base: "20px", lg: "0px" }}
       
      >
        <Box mt="30px" ml={{ base: "200px", lg: "0px" }}>
         
          <Text lineHeight="8" mt="20px">
            An LP Plenum Low-Pressure Plenum or Terminal Box is an essential
            component in HVAC <br></br>
             systems It serves as a critical junction point in the
            <br></br> ductwork and offers several benefits in HVAC applications.
          </Text>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
        
          <Image src="/plenum.png" alt="plenum" />
        </Box>
      </Box>
      
      <Box>
        <Box>
          <DifferentTypesOfLpplenumterminal />
          <AdvantagesofLpPlenumTerminalbox />
        </Box>
        <Box>
          <Shrivedhaafooter />
        </Box>
      </Box>
    </Box>
  );
};
