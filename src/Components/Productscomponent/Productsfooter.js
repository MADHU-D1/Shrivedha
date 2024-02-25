import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { AtSignIcon } from "@chakra-ui/icons";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
//import React from "react";
import {
  Heading,
  Text,
  Box,
  
  Center,
  
  Icon,
  
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Productsfooter() {
  return (
   
    <Box bg="#0b2558" mt={{base:"40px",lg:"40px"}}   p={{base:"10px",lg:"30px"}} flexDirection={{base:"row",lg:"row"}} w={{base:"1125px", lg:'100%'}} h={{base:"none", lg:"100%"}}>
      <Box  display={{base:"flex", lg:"flex"}}   borderBottom="2px solid white" m="30px"  >
        <Box borderRight={{base:"2px solid #fff",lg:"2px solid #fff"}} m="30px"  pr="30px">
          <Box  ml={{base:"20px",lg:"100px"}}>
            <Heading mb="10px"   color="#fff" >
            SHRIVEDAA
            </Heading>
            <Box color="#fff">
            <Text>Shrivedaa Engineering Technologies</Text>
            <Text>Plot No: 85, phase-III, IDA, Jeedimetla</Text>
            <Text>Quthbullapur Mandal, Medchal, Malkajgiri</Text>
            <Text>Telangana-500055</Text>
            </Box>
          </Box>
          <Box mt="2px"  ml={{base:"25px",lg:"95px"}}>
            <Icon mr="-10px" h="80px" w="60px" color="#fff">
              <AiFillInstagram />
             
            </Icon>
            <Icon mr="-10px" h="80px" w="60px" color="#fff">
              <AiFillLinkedin />
            </Icon>
            <Icon h="80px" w="60px" color="#fff">
              <FaFacebook />
            </Icon>
          </Box>
        </Box>

       <Center >
        <Box display='flex' flexDir='row' pb='60px'>
        <Box  ml={{base:"70px", lg:'150px'}}>
          <Heading fontSize="20px" color="#ff5c23" mt="40px">Quick Links</Heading>
          <Box color="#fff"  pt="15px" >
            <Link to="/"><Text p="3px">Home</Text></Link>
           <Link to="/aboutus"> <Text p="3px">About Us</Text></Link>
            <Link to='/projects'><Text p="3px">Projects</Text></Link>
            <Link to="/products"><Text p="3px">Products</Text></Link>
            <Link to="/contactus"><Text p="3px">Contact Us</Text></Link>
          </Box>
        </Box>

        <Box  ml={{base:'100px',lg:'200px'}}>
          <Heading fontSize="20px" color="#ff5c23"  mt="40px">Contact Details</Heading>
          <Box color="#fff"  pt="15px" >
           <Box display='flex' flexDir='row'>
              <Box >
              <Icon mr="-10px" h="40px" w="30px" color="#fff">
              <BsFillEnvelopeOpenFill />
            </Icon>
                <Box>
                <Icon mr="-10px" h="40px" w="40px" color="#fff">
                <AiFillPhone />
              </Icon>
                </Box>
              </Box>
              <Box  >
                <Text fontSize='18px'>sales@shrivedaa.com</Text>
                
                <Text fontSize='18px' pt="10px">6305958099</Text>
                
              </Box>
           </Box>
          </Box>
        </Box>
      </Box>
      </Center>
      </Box>

      <Box textAlign="center" mt="20px">
        <Text color="#fff">
          <Icon mr="8px">
            <AtSignIcon />
          </Icon>
          
          2023 Shrivedhaa
          <Icon fontSize="23px" mr="8px"ml="8px">
            <MdCopyright />
          </Icon>
          All rights Reserved
        </Text>
      </Box>
    </Box>
  );
}
export default Productsfooter
