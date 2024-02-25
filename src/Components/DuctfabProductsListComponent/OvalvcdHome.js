import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { DifferentMaterialsOvalvcd } from "./DifferentMaterialsOvalvcd";
import { AdvantagesofOvalVcd } from "./AdvantagesofOvalVcd";
import ProductsNavbar from "./ProductsNavbar";
export const OvalvcdHome = () => {
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
        OVAL VCD
        </Heading>
      </Box>
    </Box>
      <Box  >
      <Box
        display={{ base: "flex", lg: "flex" }}
        flexDir={{ base: "column", lg: "row" }}
        w={{ base: "1100px", lg: "1400px" }}
        justifyContent={{ base: "space-around", lg: "space-around" }}
        mt={{ base: "30px", lg: "20px" }}
      
      
        m={{ base: "20px", lg: "20px" }}
        
      >
        <Box mt="30px" ml={{ base: "200px", lg: "0px" }}>
          
          <Box>
          <Text lineHeight="8" mt="20px" >
            An Oval Volume Control Damper (VCD) is a specialized component used
            in heating, ventilation, and air <br></br> conditioning (HVAC)
            systems to regulate or control the flow of air within ductwork.<br></br> 
            Unlike traditional rectangular or square dampers, oval
            VCDs have an oval-shaped frame and blades
          </Text>
          </Box>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
        
          <Image src="/ovalvcd.png" alt="ovalvcd" />
        </Box>
      </Box>
      <Box>
        <Box >
        <DifferentMaterialsOvalvcd />
        <AdvantagesofOvalVcd />
        </Box>
        <Box>
          <Shrivedhaafooter />
        </Box>
      </Box>
    </Box>
    </Box>
  );
};
