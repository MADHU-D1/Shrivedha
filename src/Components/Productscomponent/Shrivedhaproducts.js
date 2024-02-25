import {
  Heading,
  Box,
  
  Text,
 
  Image,
 
} from "@chakra-ui/react";
import React from "react";

function Shrivedhaproducts() {
  return (
    <Box mt="100px" mr={{base:"-600px",lg:"0px"}} p={{base:"90px", lg:"0px"}}>
      
      <Box m={{ base: "0px", lg: "15px" }} mt={{base:"50px", lg:"40px"}}>
        <Box
          display={{ base: "flex", lg: "flex" }}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={{ base: "space-between", lg: "space-between" }}
        >
          <Box>
            
            <Text  color="#0b2558" textAlign={{base:"center",lg:"center"}} fontSize={{base:"40px",lg:'22px'}}>
              RECTANGULAR DUCT
              
            </Text>
            <Image
              src="rectangle.png"
              alt="rectangle"
              w={{ base: "1000px", lg: "450px" }}
              mt={{base:"10px", lg:"16px"}}
            />
          </Box>

          <Box mt={{base:"50px",lg:"0px"}}>
            
            <Text  color="#0b2558" textAlign={{base:"center",lg:"center"}} fontSize={{base:"40px",lg:'22px'}}>
              SPIRAL FLAT OVAL DUCT
            </Text>
            <Image
              src="/spiralflat.png"
              alt="spiralflat"
              w={{ base: "1000px", lg: "450px" }}
              mt={{base:"10px", lg:"16px"}}
            />
          </Box>

          <Box mt={{base:"50px",lg:"0px"}}>
           
            <Text color="#0b2558" textAlign={{base:"center",lg:"center"}} fontSize={{base:"40px",lg:'22px'}}>
              SPIRAL ROUND DUCT
            </Text>
            <Image
            src="/spiralround.png"
            alt="spiralround"
            w={{ base: "1000px", lg: "450px" }}
            mt={{base:"10px", lg:"16px"}}
          />
          </Box>
        </Box>

        <Box
          mt={{ base: "50px", lg: "50px" }}
          display={{ base: "flex", lg: "flex" }}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={{ base: "space-between", lg: "space-between" }}
        >
          <Box>
           
            <Text  color="#0b2558" textAlign={{base:"center",lg:"center"}} fontSize={{base:"40px",lg:'22px'}}>
              MS - FLANGE DUCT
            </Text>
            <Image
            src="/Msflange.png"
            alt="Msflange"
            w={{ base: "1000px", lg: "450px" }}
            mt={{base:"10px", lg:"16px"}}
          />
          </Box>

          <Box mt={{base:"50px",lg:"0px"}}>
           
            <Text  color="#0b2558" textAlign={{base:"center",lg:"center"}} fontSize={{base:"40px",lg:'22px'}}>
              SLIP ON FLANGE DUCT
            </Text>
            <Image
            src="/slipon.png"
            alt="slipon"
            w={{ base: "1000px", lg: "450px" }}
            mt={{base:"10px", lg:"16px"}}
          />
          </Box>

          <Box mt={{base:"50px",lg:"0px"}}>
            
            <Text  color="#0b2558" textAlign={{base:"center",lg:"center"}} fontSize={{base:"40px",lg:'22px'}}>
              ROUND TO SQUARE DUCT
            </Text>
            <Image
              src="/round.png"
              alt="round"
              w={{ base: "1000px", lg: "450px" }}
              mt={{base:"10px", lg:"16px"}}
            />
          </Box>
        </Box>

        <Box
          mt={{ base: "50px", lg: "50px" }}
          display={{ base: "flex", lg: "flex" }}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={{ base: "space-around", lg: "space-around" }}
        >
          <Box mt={{base:"30px",lg:"0px"}}>
            
            <Text  color="#0b2558" textAlign={{base:"center",lg:"center"}} fontSize={{base:"40px",lg:'22px'}}>
              OVAL VCD
            </Text>
            <Image
              src="/ovalvcd.png"
              alt="ovalvcd"
              w={{ base: "1000px", lg: "450px" }}
              mt={{base:"20px", lg:"16px"}}
            />
          </Box>

          <Box mt={{base:"50px",lg:"0px"}}>
            
            <Text color="#0b2558" mr={{base:"40px",lg:"50px"}} textAlign={{base:"center",lg:"center"}} fontSize={{base:"40px",lg:'22px'}}>
              LP PLENUM/TERMINAL BOX
            </Text>
            <Image
              src="/plenum.png"
              alt="plenum"
              w={{ base: "1000px", lg: "450px" }}
              mt={{base:"10px", lg:"16px"}}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Shrivedhaproducts;
