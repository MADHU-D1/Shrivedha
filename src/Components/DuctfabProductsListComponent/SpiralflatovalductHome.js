import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { Differenttypesofspiralduct } from "./Differenttypesofspiralduct";
import { AdvantagesofSpiralFlatOvalDuct } from "./AdvantagesofSpiralFlatOvalDuct";
import ProductsNavbar from "./ProductsNavbar";
export const SpiralflatovalductHome = () => {
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
        SPIRAL FLAT OVAL DUCT
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
            
            Spiral flat oval duct is a specialized type of ductwork used in
            heating, ventilation, and air conditioning (HVAC) <br></br> systems.
            It is distinct from standard rectangular or round ducts due to its
            unique flattened oval shape, which <br></br> provides certain
            advantages and characteristics
          </Text>
          <Box mt="10px" lineHeight="8" >
            <Text className="style">Galvanized Iron Spiral Flat Oval Duct</Text>
            <Text className="style">Insulated Spiral Flat Oval Duct</Text>
            <Text className="style">Double-Wall Spiral Flat Oval Duct</Text>
          </Box>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
          <Image src="/spiralflat.png" alt="banner" />
        </Box>
      </Box>
      <Box>
      <Differenttypesofspiralduct />
      <AdvantagesofSpiralFlatOvalDuct />
      </Box>
      <Box>
        <Shrivedhaafooter />
      </Box>
    </Box>
  );
};
