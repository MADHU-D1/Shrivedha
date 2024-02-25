import React from "react";

import {
  Text,
  Box,
  Grid,
  GridItem,
  Center,
  Container,
  HStack,
  Image,
  Heading,
  Flex,
  Square,
  Spacer,
  Stack,
} from "@chakra-ui/react";

function Philisophy() {
  return (
    <Flex
      flexDirection={{ base: "Column", lg: "row" }}
      mt="20px"
      justifyContent="space-between"
    >
      <Box mt="120px" ml={{ base: "20px", lg: "100px" }} w="600px">
        <Box>
          <Heading
            fontSize={{ base: "50px", lg: "40px" }}
            ml={{ base: "140px", lg: "0px" }}
            color="#ec521a"
          > 
            OUR PHILOSOPHY
          <Box w={{base:"430px",lg:"80px"}} ml={{base:"0px",lg:"5px"}}  borderBottom="solid 3px #0b2558"></Box>

          </Heading>
        </Box>
        <Box mt="60px"  textAlign="justify" >
          <Text lineHeight="8" fontSize={{ base: "20px", lg: "15px" }}>
            In today's fast-paced industrial landscape, every successful
            business needs a clear mission and vision to navigate the
            complex challenges of the market.  we'll delve into the
            mission and vision of a prominent duct manufacturing 
            company, demonstrating how their core principles guide their
            operations, innovations, and commitment to excellence. The company's
            mission revolves around delivering high-quality duct
            solutions that exceed customer  expectations. They aim to
            be the go-to choice for clients seeking reliability and
            excellence.
          </Text>
        </Box>
      </Box>

      <Box
        borderRadius="40px"
        bg="#ec521a"
        h={{ base: "500px", lg: "700px" }}
        w={{ base: "700px", lg: "500px" }}
        mr={{ base: "15px", lg: "-850px" }}
        ml={{ base: "290px", lg: "50px" }}
        mt={{ base: "40px", lg: "0px" }}
      />
      <Box
        mt={{ base: "-400px", lg: "68px" }}
        mr={{ base: "0px", lg: "20px" }}
        ml={{ base: "250px", lg: "-20px" }}
        w={{ base: "700px", lg: "700px" }}
        h={{ base: "300px", lg: "550px" }}
      >
        <Image borderRadius="30px" src="philosphy.png" alt="philosphy" />
      </Box>
    </Flex>

    //   <Grid Grid templateColumns='repeat(2, 1fr)'>

    //       <Box  mt="100px" alignItems="start" border="1px solid black">
    //       <Box > <Heading><Text fontSize="40px" color="#ec521a" fontFamily="Franklin Gothic Medium" >Our Philosophy</Text></Heading></Box>
    //         <Box border="1px solid black" mt="30px" >At Ductofb, we  created an organization commited to provide complete customer satisfaction. We have devoted our facilties, equipment, and personnel to one gole: "to provide our Customers the best qulityn of products and services in the HVAC industry with our State-of-the-art facilities & tatest technology".</Box>
    //       </Box>

    //       <Box  borderRadius="40px" ml="300px" bg="#ec521a" h="500px" w="500px" border="1px solid black">
    //         <Box pt="50px" w="600px" border="1px solid black"><Image border="1px solid black" borderRadius="30px" pr="100px"  src="why-choose-us.jpg" alt="choose"/></Box>
    //       </Box>

    //  </Grid>
  );
}

export default Philisophy;

//import { Box, Image, Flex, Heading } from '@chakra-ui/react';

// function Philosophy() {
//   return (
//     <Box
//       mt="30px"
//       flexDirection="row"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Flex>
//         <Box
//           borderRadius="40px"
//           mt="50px"
//           pb="10px"
//           bg="#ec521a"
//           h="500px"
//           w="350px"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Image
//             borderRadius="30px"
//             src="why-choose-us.jpg"
//             alt="choose"
//             maxW="100%"
//             maxH="100%"
//           />
//         </Box>
//         <Box ml="330px" mt="100px" alignItems="center">
//           <Box>
//             <Heading>
//               <Box
//                 display="flex"
//                 ml="60px"
//                 fontSize="40px"
//                 color="#ec521a"
//                 fontFamily="Franklin Gothic Medium"
//               >
//                 <Box borderBottom="2px solid #0b2558">WHY CHOOSE US</Box>
//               </Box>
//             </Heading>
//           </Box>
//           <Box mt="30px" fontSize="13px">
//             At Ductofb, we created an organization committed to providing
//             complete customer satisfaction. We have devoted our facilities,
//             equipment, and personnel to one goal: "to provide our customers the
//             best quality of products and services in the HVAC industry with our
//             state-of-the-art facilities & latest technology."
//           </Box>
//           <Box
//             fontSize="12px"
//             flexDirection="row"
//             justifyContent="center"
//             pt="40px"
//           >
//             <ul>
//               <li>
//                 Ductofab has evolved into the complete one-stop solution for the
//                 HVAC industry.
//               </li>
//               <li>The promoters have almost 25 years of experience.</li>
//               <li>We recognize our customers as our partners.</li>
//             </ul>
//           </Box>
//         </Box>
//       </Flex>
//     </Box>
//   );
// }

// export default Philosophy;
