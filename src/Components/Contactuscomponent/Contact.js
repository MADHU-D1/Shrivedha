import {
  Box,
  Center,
  Heading,
  Text,
  
  
} from "@chakra-ui/react";
import React from "react";
import Loginform from "./Loginform";


function Contact() {
  return (
    <Box mt={{base:"0px", lg:"0px"}} ml={{base:"200px", lg:"0px"}}>
    <Center>
      <Box ml={{base:"580px",lg:"0px"}}>
        

        <Box flexDir={{base:"row",lg:"row"}} display="flex"    h={{base:'1300px', lg:'680px'}} w={{base:"1000px",lg:'1440px'}} justifyContent='center' mb={{base:"0px", lg:"10"}}>
        <Box boxShadow='base'   bg='#ffffff' flexDir={{base:"column",lg:"row"}} display="flex" mt="30px" h='620px' w="1020px">
          <Box pt="30px" m="30px" pl={{base:"0px", lg:'30px'}}   flexDir={{base:"column", lg:"row"}}>
            <Box>
              <Box boxShadow='base' p='6' rounded='md' bg='white' textAlign='center'>
                <Heading mb={{base:"10px", lg:"10px"}} lineHeight='8'  fontSize='20px'  fontFamily='poppins'>
                  CONTACT
                </Heading>

                <Box color="#232627" textAlign="justify">
                  <Box fontWeight="300" fontSize={{base:"20px",lg:"15px"}} fontFamily='poppins'>
                    <Text>8899776608</Text>
                    <Text>info@shrivedaa.com</Text>
                    <Text>anil@shrivedaa.com</Text>
                    <Text>palguna@shrivedaa.com</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box mt="40px"  >
              <Box  boxShadow='base' p='6' rounded='md' bg='white' textAlign='center' >
                <Heading mb={{base:"10px", lg:"10px"}} lineHeight='8' fontSize='20px'  fontFamily='poppins'>
                  HEAD OFFICE
                </Heading>

                <Box color="#232627" textAlign="justify">
                  <Box fontWeight="300" fontSize="15px" fontFamily='poppins' >
                    <Text>Shrivedaa Engineering Technologies</Text>
                    <Text>Plot No: 85, phase-III, IDA, Jeedimetla</Text>
                    <Text>Quthbullapur Mandal, Medchal</Text>
                    <Text> Malkajgiri Telangana</Text>
                    <Text> PinCode-500055</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Loginform />
           
          </Box>
          </Box>
          
        </Box>
      </Box>
    </Center>
    
    </Box>
  );
}

export default Contact;











