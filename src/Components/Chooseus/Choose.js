import "./Choose.css";
import React from "react";
import {
  Box,
  Heading,
  Image,
  Flex,
 
  Text,
  
} from "@chakra-ui/react";

function Choose() {
  return (
    <Box>
      <Flex flexDirection={{ base: "Column-Reverse", lg: "row" }}>
        <Box
          borderRadius="40px"
          pb="10px"
          bg="#ec521a"
          //border={'1px solid black'}
          h={{ base: "400px", lg: "660px" }}
          w={{ base: "650px", lg: "470px" }}
          mt={{ base: "300px", lg: "50px" }}
        >
          <Box
            ml={{ base: "60px", lg: "40px" }}
            w={{ base: "650px", lg: "750px" }}
            pt={{ base: "50px", lg: "58px" }}
          >
            <Image
              borderRadius="30px 30px 30px 30px"
              w={{ base: "100%", lg: "700px" }}
              h={{ base: "400px", lg: "540px" }}
              src="why-choose-us.jpg"
              alt="choose"
            />
          </Box>
        </Box>

        <Box
          flexDirection={{ dase: "row", lg: "Column" }}
          ml={{ base: "10px", lg: "320px" }}
          alignItems="baseline"
          mt={{ base: "70px", lg: "160px" }}
          // border="1px solid black"
          w={{ base: "750px", lg: "600px" }}
          h={{ base: "200px", lg: "400px" }}
        >
          <Box>
            <Heading
              color="#ec521a"
              fontSize={{ base: "40px", lg: "40px" }}
              ml={{ base: "250px", lg: "150px" }}
              mb={{ base: "30px", lg: "30px" }}
            >
             
             WHY CHOOSE US
             <Box w={{base:"330px",lg:"86px"}} ml={{base:"0px",lg:"5px"}}  borderBottom="solid 3px #0b2558"></Box>

              
            </Heading>
           
           <Box ml={{base:"100px",lg:"0px"}}  textAlign="justify" >
            <Text mt="50px" fontSize={{ base: "20px", lg: "15px" }} >
              At Ductofb we created an organization commited to provide
             
              complete customer satisfaction. We have devoted our facilties,
              
              equipment and personnel to one gole to provide our Customers
              the best qulity of products and services in the HVAC
              industry with our State-of-the-art facilities & tatest
              technology.
            </Text>
            </Box>
            
            <Box>
              <Box mt="30px" ml={{base:"100px", lg:"0px"}}  textAlign="justify" >
                <Text>
                  Ductofab has evolved into the complete one-stop solution to
                  HVAC industry.
                </Text>
                <Text>The Promoters have almost 25years of experience</Text>
                <Text>we recognize our customers as our partners.</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Choose;  
