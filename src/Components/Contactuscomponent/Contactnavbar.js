// import { useState } from "react";
// import Contact from "./Contact";
// import {
//   Text,
//   Box,
//   Grid,
//   GridItem,
//   HStack,
//   Image,
//   Heading,
  
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import AutocomleteProducts from "../AutocompletProducts/AutocomleteProducts";
// import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";

// function Contactnavbar() {
//   const [showCard, setShowCard] = useState(false);

//   const handleMouseEnter = () => {
//     setShowCard(true);
//   };

//   const handleMouseLeave = () => {
//     setShowCard(false);
//   };

//   return (
//     <Box>
//         <Box style={{
//           flexGrow: 1,
//           position: "fixed",
//           top: 0,
//           zIndex: 100,
//           width: "100%",
         
//           backgroundColor:'rgba((0, 0, 0, 0.36'
        
            
//         }}>
//       <Grid templateColumns="repeat(2, 1fr)">
//       <Link to='/'>
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
//           <Box display='flex' flexDir='row' justifyContent='space-around' pt="34px" pr="50px" >

//               <Box
//                 // p={{ base: "18px", lg: "32px" }}
//                 // mt={{ base: "2px", lg: "10px" }}
//                 fontWeight="bold"
//                 className="menuItem"
//               >
//                 <Link to="/">
//                   <Text className="hover">HOME</Text>
//                 </Link>
//               </Box>
//               <Box
//                 // p={{ base: "18px", lg: "32px" }}
//                 // mt={{ base: "4px", lg: "10px" }}
//                 className="menuItem"
//                 fontWeight="bold"
//               >
//                 <Link to="/aboutus">
//                   <Text>ABOUT US</Text>
//                 </Link>
//               </Box>
//               <Box
//                 // p={{ base: "18px", lg: "32px" }}
//                 // mt={{ base: "4px", lg: "10px" }}
//                 className="menuItem"
//                 fontWeight="bold"
//               >
//                 <Link to="/projects">
//                   <Text>PROJECTS</Text>
//                 </Link>
//               </Box>
//               <Box
//                 // p={{ base: "18px", lg: "32px" }}
//                 // mt={{ base: "4px", lg: "10px" }}
//                 className="menuItem"
//                 fontWeight="bold"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <Link to="/products">
//                   <Text className="hover">PRODUCTS</Text>
//                 </Link>
//                 {showCard && <AutocomleteProducts />}
//               </Box>
//               <Box
//                 // p={{ base: "18px", lg: "32px" }}
//                 // mt={{ base: "4px", lg: "10px" }}
//                 className="menuItem"
//                 fontWeight="bold"
//               >
//                 <Link to="/contactus">
//                   <Text className="hover">CONTACT US</Text>
//                 </Link>
//               </Box>
//             </Box>
//           </Box>
//         </GridItem>
//       </Grid>
//        </Box>
//        <Image src="/contactusbgimg.jpg"/>
//       <Contact />
//     <Box mt={{base:"80px", lg:"0px"}}>
//     <Shrivedhaafooter/>
//     </Box>
//     </Box>
//   );
// }

// export default Contactnavbar;










import { useState } from "react";
import Contact from "./Contact";
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
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";

function Contactnavbar() {
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
                    <Text className="hover">PRODUCTS</Text>
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
      <Box position="relative" mt='100px'>
        <Image
          h="300px"
          w="100%"
          src="/contactusbgimg.jpg"
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
          <Heading fontSize="4xl" color='#ec521a'>CONTACT US</Heading>
        </Box>
      </Box>
      <Contact />
      <Box mt={{ base: "80px", lg: "0px" }}>
        <Shrivedhaafooter />
      </Box>
    </Box>
  );
}

export default Contactnavbar;
