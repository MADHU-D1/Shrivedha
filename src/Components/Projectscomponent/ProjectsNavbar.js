// import { useState } from "react";
// import {
//   Text,
//   Box,
//   Grid,
//   GridItem,
  
//   Image,
//   Heading,
 
// } from "@chakra-ui/react";


//  import { Link } from "react-router-dom";
// import AutocomleteProducts from "../AutocompletProducts/AutocomleteProducts";

// export default function ProjectsNavbar() {
//   const [showCard, setShowCard] = useState(false);

  

//   const handleMouseEnter = () => {
//     setShowCard(true);
//   };

//   const handleMouseLeave = () => {
//     setShowCard(false);
//   };

//   return (
//     <Box style={{
//       flexGrow: 1,
//       position: "fixed",
//       top: 0,
//       zIndex: 100,
//       width: "100%",
     
//       backgroundColor:'rgba((0, 0, 0, 0.36'
    
        
//     }}>
//       <Grid templateColumns="repeat(2, 1fr)">
//        <Link to='/'>
//       <Box   pl={{ base: "80px", lg: "80px" }}>
//       <Heading
      
//       fontSize={{ base: "40px", lg: "50px" }}
//        // mb={{ base: "-10px", lg: "24px" }}
//         color="#0b2558"
//         pt={{base:"25px", lg:"0px"}}
//         fontFamily='poppins'
//       >
//         SHRI<span style={{ marginLeft: "15px" }}>VEDAA</span>
//       </Heading>
//       <Box pt={{base:"0px",lg:"0px"}} ml="5px" color="#1399f0" position="absolute" zIndex="100" >
//         <Text fontSize={{base:"14px", lg:"20px"}} >
          
//           Engineering
//           <span style={{ marginLeft: "10px" }}>Technologies</span>
//         </Text>
//       </Box>
//     </Box>
//     </Link>
//         <GridItem>
//           <Box
         
//           >
//             <Box display='flex' flexDir='row' justifyContent='space-around' pt="34px" pr="50px" >
            
//               <Box
//                 //p={{ base: "20px", lg: "32px" }}
//                // mt={{ base: "15px", lg: "30px" }}
//                 fontWeight="bold"
//                 className="menuItem"
//               >
//                 <Link to="/">
//                   <Text  className="hover">HOME</Text>
//                 </Link>
//               </Box>
//               <Box
//                // p={{ base: "20px", lg: "32px" }}
//                // mt={{ base: "15px", lg: "10px" }}
//                 fontWeight="bold"
//                 className="menuItem"
//               >
//                 <Link to="/aboutus">
//                   <Text>
                
//                       ABOUT US
                  
//                   </Text>
//                 </Link>
//               </Box>
//               <Box
//                 //p={{ base: "20px", lg: "32px" }}
//                 //mt={{ base: "15px", lg: "10px" }}
//                 fontWeight="bold"
//                 className="menuItem"
//               >
//                 <Link to="/projects">
//                   <Text>PROJECTS</Text>
//                 </Link>
//               </Box>
//               <Box
//                 //p={{ base: "20px", lg: "32px" }}
//                 //mt={{ base: "15px", lg: "10px" }}
//                 fontWeight="bold"
//                 className="menuItem"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <Link to="/products">
//                   <Text >PRODUCTS </Text>
                  
//                 </Link>
//                 {showCard && <AutocomleteProducts />}
                
//               </Box>
//               <Box
//                 //p={{ base: "20px", lg: "32px" }}
//                // mt={{ base: "15px", lg: "10px" }}
//                 fontWeight="bold"
//                 className="menuItem"
//               >
//                 <Link to="/contactus">
//                   <Text className="hover">CONTACT US</Text>
//                 </Link>
//               </Box>
//             </Box>
//             </Box>
         
//         </GridItem>
//       </Grid>
//       <Box
//         // display="felx"
//         // //className="tracking-in-expand-fwd-top"
//         // mt={{ base: "-370px", lg: "-450px" }}
//         // mr={{ base: "90px", lg: "180px" }}
//         // w={{ base: "1000px", lg: "1380px" }}
//         // ml={{ base: "30px", lg: "50px" }}
//         // //w={{base:"1440px", lg:"1360px"}} h={{base:"200px", lg:"300px"}}    mt={{base: "-450px", lg:"-480px"}} ml="30px"  

//       >
         
//          <Image src="/ductoprojectsimg.jpg"/>
//       </Box>
//     </Box>
//   );
//    }

 


import { useState } from "react";
import {
  Text,
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AutocomleteProducts from "../AutocompletProducts/AutocomleteProducts";

export default function ProjectsNavbar() {
  const [showCard, setShowCard] = useState(false);

  const handleMouseEnter = () => {
    setShowCard(true);
  };

  const handleMouseLeave = () => {
    setShowCard(false);
  };

  return (
    <Box>
      <Box
        style={{
          flexGrow: 1,
          position: "fixed",
          top: 0,
          zIndex: 100,
          width: "100%",
         
        }}
      >
        <Grid templateColumns="repeat(2, 1fr)">
          <Link to="/">
            <Box pl={{ base: "80px", lg: "80px" }}>
              <Heading
                fontSize={{ base: "40px", lg: "50px" }}
                color="#0b2558"
                pt={{ base: "25px", lg: "0px" }}
                fontFamily="poppins"
              >
                SHRI<span style={{ marginLeft: "15px" }}>VEDAA</span>
              </Heading>
              <Box
                pt={{ base: "0px", lg: "0px" }}
                ml="5px"
                color="#1399f0"
                position="absolute"
                zIndex="100"
              >
                <Text fontSize={{ base: "14px", lg: "20px" }}>
                  Engineering
                  <span style={{ marginLeft: "10px" }}>Technologies</span>
                </Text>
              </Box>
            </Box>
          </Link>
          <GridItem>
            <Box>
              <Box
                display="flex"
                flexDir="row"
                justifyContent="space-around"
                pt="34px"
                pr="50px"
              >
                <Box fontWeight="bold" className="menuItem">
                  <Link to="/">
                    <Text className="hover">HOME</Text>
                  </Link>
                </Box>
                <Box fontWeight="bold" className="menuItem">
                  <Link to="/aboutus">
                    <Text>ABOUT US</Text>
                  </Link>
                </Box>
                <Box fontWeight="bold" className="menuItem">
                  <Link to="/projects">
                    <Text>PROJECTS</Text>
                  </Link>
                </Box>
                <Box
                  fontWeight="bold"
                  className="menuItem"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="/products">
                    <Text>PRODUCTS </Text>
                  </Link>
                  {showCard && <AutocomleteProducts />}
                </Box>
                <Box fontWeight="bold" className="menuItem">
                  <Link to="/contactus">
                    <Text className="hover">CONTACT US</Text>
                  </Link>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box position="relative" mt="100px">
        <Image
          h="400px"
          w="100%"
          src="/ductoprojectsimg.jpg"
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
        >
          <Heading fontSize="4xl" color='#ec521a'>OUR ACCOMPLISHED PRESTIGIOUS PROJECTS</Heading>
        </Box>
      </Box>
    </Box>
  );
}
