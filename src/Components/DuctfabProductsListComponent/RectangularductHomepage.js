import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import React from "react";

import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";
import { DifferentTypesofrectangularducts } from "./DifferentTypesofrectangularducts";
import { AdvantagesofRectangularDuct } from "./AdvantagesofRectangularDuct";
import ProductsNavbar from "./ProductsNavbar";
export const RectangularductHomepage = () => {
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
        RECTANGULAR DUCT
        </Heading>
      </Box>
    </Box>
      <Box
        display={{ base: "flex", lg: "flex" }}
        flexDir={{ base: "column", lg: "row" }}
        w={{ base: "1100px", lg: "1400px" }}
        justifyContent={{ base: "space-around", lg: "space-around" }}
        mt={{ base: "30px", lg: "0px" }}
       
        
        m={{ base: "20px", lg: "20px" }}
        //borderRadius={{ base: "20px", lg: "20px" }}
      >
        <Box  ml={{ base: "200px", lg: "0px" }} >
          
          <Text lineHeight="8" mt="20px">
            Rectangular ducts are commonly used in heating, ventilation, and air
            conditioning (HVAC) systems. <br></br> They offer several features
            and benefits that make them a popular choice for various
            applications
          </Text>
          <Box mt="10px"  lineHeight="8">
            <Text >Galvanized Iron Rectangular Duct</Text>
            <Text >Insulated Rectangular Duct</Text>
            <Text >Aluminum Rectangular Duct</Text>
            <Text >Stainless Steel Rectangular Duct</Text>
          </Box>
        </Box>
        <Box ml={{ base: "200px", lg: "0px" }} h="300px" w="350px" mt="40px">
          <Image src="rectangle.png" alt="rectangle" />
        </Box>
      </Box>
      <Box bg={{base:"none", lg:''}}>
      <DifferentTypesofrectangularducts />
      <AdvantagesofRectangularDuct />
      </Box>
      <Box>
        <Shrivedhaafooter />
      </Box>
    </Box>
  );
};
