// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   Box,
//   Grid,
//   GridItem,
//   Button,
//   Image,
//   Icon,
//   Heading,

// } from "@chakra-ui/react";
// import "../App.css";
// import { FaTimes, FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import AutocomleteProducts from "./AutocompletProducts/AutocomleteProducts";

// function Navbar() {
//   const [showCard, setShowCard] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const images = [
//     "/Ductfabhomenavimage.jpg",
//     "/DuctingHomeNaveimg5.jpg",
//     "/DuctingHomeNaveimg9.JPG",
//   ];
//   const intervalDuration = 3000;

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, intervalDuration);

//     return () => clearInterval(intervalId);
//   }, [images.length]);

//   const handleMouseEnter = () => {
//     setShowCard(true);
//   };

//   const handleMouseLeave = () => {
//     setShowCard(false);
//   };

//   return (
//     <div>
//       <Box
//         flexGrow={{ base: "1", lg: "1" }}
//         position={{ base: "fixed", lg: "fixed", md:'fixed', sm:'fixed' }}
//         top={{ base: "0", lg: "0" }}
//         zIndex={{ base: "100", lg: "100", md:'100', sm:'100' }}
//         width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
//         h={{base:'103px', lg:'120px'}}
        
//       >
//          <Box >
//         <Grid templateColumns="repeat(2, 1fr)">
//           <Link to="/">
//             <Box pl={{ base: "80px", lg: "80px" }}>
//               <Heading
//                 fontSize={{ base: "40px", lg: "50px" }}
//                 color="#0b2558"
//                 pt={{ base: "25px", lg: "22px" }}
//                 fontFamily="poppins"
//               >
//                 SHRI<span style={{ marginLeft: "15px" }}>VEDAA</span>
//               </Heading>
//               <Box
//                 pt={{ base: "0px", lg: "0px" }}
//                 ml="5px"
//                 color="#1399f0"
//                 position="absolute"
//                 zIndex="100"
//               >
//                 <Text fontSize={{ base: "14px", lg: "20px" }}>
//                   Engineering
//                   <span style={{ marginLeft: "10px" }}>Technologies</span>
//                 </Text>
//               </Box>
//             </Box>
//           </Link>
//           <GridItem>
//             <Box>
//               <Box
//                 //color='#fff'
//                 fontFamily='poppins'
//                 display={{ base: "none", lg: "flex"}}
//                 flexDir={{ base: "row", lg: "row", xl: "row" }}
//                  justifyContent={{
//                 //   base: "space-around",
//                    lg: "space-around",
//                 //   xl: "space-around",
//                 //   md: "space-around",
//                 //   sm: "space-around",
//                  }}
               
//                  pt={{
//                    lg: "44px",
//                 //   base: "44px",
                 
//                 //   xl: "44px",
//                 //   md: "44px",
//                 //   sm: "44px",
//                  }}
//                 pr={{
//                   lg: "50px",
//                   //base: "50px",
                  
//                   // xl: "50px",
//                   // md: "50px",
//                   // sm: "50px",
//                 }}
//               >
//                 <Box fontWeight="bold" className="menuItem">
//                   <Link to="/">
//                     <Text className="hover">HOME</Text>
//                   </Link>
//                 </Box>
//                 <Box fontWeight="bold" className="menuItem">
//                   <Link to="/aboutus">
//                     <Text>ABOUT US</Text>
//                   </Link>
//                 </Box>
//                 <Box fontWeight="bold" className="menuItem">
//                   <Link to="/projects">
//                     <Text>PROJECTS</Text>
//                   </Link>
//                 </Box>
//                 <Box
//                   fontWeight="bold"
//                   className="menuItem"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <Link to="/products">
//                     <Text>PRODUCTS </Text>
//                   </Link>
//                   {showCard && <AutocomleteProducts />}
//                 </Box>
//                 <Box fontWeight="bold" className="menuItem">
//                   <Link to="/contactus">
//                     <Text className="hover">CONTACT US</Text>
//                   </Link>
//                 </Box>
//               </Box>
               
              

//               <Box
//                 display={{ base: "flex", lg: "none" }}
//                 flexDir="column"
//                 //alignItems="flex-end"
//                 position="fixed"
//                 top="100px"
//                 right={{base:"10", lg:" 10", xl:"10",md:"10", sm:"10"}}
//                 zIndex="100"
//                 bg="white"
//                 w='200px'
//                 h="300px"
                
//                 //textAlign='justify'
//                 alignItems='center'
//                  boxShadow="md"
//                 borderRadius="md"
                
//                 opacity={showCard ? 1 : 0}
//                 transition="opacity 0.3s ease"
//               >
//                 <Box fontWeight="bold" className="menuItem">
//                   <Link to="/">
//                     <Text className="hover">HOME</Text><br></br>
//                   </Link>
//                 </Box>
//                 <Box fontWeight="bold" className="menuItem">
//                   <Link to="/aboutus">
//                     <Text>ABOUT US</Text><br></br>
//                   </Link>
//                 </Box>
//                 <Box fontWeight="bold" className="menuItem">
//                   <Link to="/projects">
//                     <Text>PROJECTS</Text><br></br>
//                   </Link>
//                 </Box>
//                 <Box fontWeight="bold" className="menuItem">
//                   <Link to="/products">
//                     <Text>PRODUCTS </Text><br></br>
//                   </Link>
//                 </Box>
//                 <Box fontWeight="bold" className="menuItem">
//                   <Link to="/contactus">
//                     <Text className="hover">CONTACT US</Text><br></br>
//                   </Link>
//                 </Box>
//               </Box>

//               <Box
//                 display={{
//                   base: "flex",
//                   lg: "none",
//                   xl: "none",
//                   md: "flex",
//                   sm: "flex",
//                 }}
//                 pt={{base:"44px", md:"44px",sm:"44px"}}
//                 pl={{base:"440px",md:"200px",sm:"200px"}}
//               >
//                 <Button
//                   onClick={() => setShowCard(!showCard)}
//                   variant="none"
//                   bg="#fff"
                  
//                   position="fixed"
//                   zIndex='100'
//                 >
//                   <Icon as={showCard ? FaTimes : FaBars} boxSize={10} />
//                 </Button>
//               </Box>
//             </Box>
//           </GridItem>
//         </Grid>
//         </Box>
//       </Box>
//       <Box
//         display={{
//           base: "flex",
//           sm: "flex",
//           md: "flex",
//           lg: "flex",
//           xl: "flex",
//         }}
//         mt={{ base: "105px", sm: "column", md: "column", lg: "120", xl: "row" }}
//         h={{ base: "500px", lg: "550px" }}
        
       
       
//         overflow={{base:"hidden", lg:"hidden",md:"hidden",sm:"hidden"}}
//         position={{base:"relative", lg:"relative",md:"relative",sm:"relative"}}
//       >
//         {images.map((image, index) => (
//           <Image
//             key={index}
           
//             src={image}
//             alt={`banner-${index}`}
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               opacity: index === currentImageIndex ? 1 : 0,
//               transition: "opacity 2.5s ease-in-out",
//             }}
//           />
//         ))}
//       </Box>
//       </div>
//   );
// }

// export default Navbar;








import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  Grid,
  GridItem,
  Button,
  Image,
  Icon,
  Heading,
} from "@chakra-ui/react";
import "../App.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import AutocomleteProducts from "./AutocompletProducts/AutocomleteProducts";

function Navbar() {
  const [showCard, setShowCard] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/Ductfabhomenavimage.jpg",
    "/DuctingHomeNaveimg5.jpg",
    "/DuctingHomeNaveimg9.JPG",
  ];
  const intervalDuration = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleMouseEnter = () => {
    setShowCard(true);
  };

  const handleMouseLeave = () => {
    setShowCard(false);
  };

  return (
    <div>
      <Box
        flexGrow={{ base: "1", lg: "1" }}
        position="fixed"
        top="0"
        zIndex="100"
        width="100%"
        h={{ base: "103px", lg: "120px" }}
      >
        <Box bg='#DCF3E7' h='130px'    fontFamily="poppins" color='#949ED4'>
          <Grid templateColumns="repeat(2, 1fr)">
            <Link to="/">
              <Box pl={{ base: "80px", lg: "80px" }}>
                <Heading
                  fontSize={{ base: "40px", lg: "50px" }}
                  color="#0b2558"
                  pt={{ base: "25px", lg: "22px" }}
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
               
                  display={{ base: "none", lg: "flex" }}
                  flexDir={{ base: "row", lg: "row", xl: "row" }}
                  justifyContent={{ lg: "space-around" }}
                  pt={{ lg: "48px" }}
                  pr={{ lg: "50px" }}
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

                <Box
                  display={{ base: "flex", lg: "none" }}
                  flexDir="column"
                  position="fixed"
                  top="100px"
                  right={{ base: "10", lg: " 10", xl: "10" }}
                  zIndex="100"
                  bg="white"
                  w="200px"
                  h="300px"
                  alignItems="center"
                  boxShadow="md"
                  borderRadius="md"
                  opacity={showCard ? 1 : 0}
                  transition="opacity 0.3s ease"
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
                  <Box fontWeight="bold" className="menuItem">
                    <Link to="/products">
                      <Text>PRODUCTS </Text>
                    </Link>
                  </Box>
                  <Box fontWeight="bold" className="menuItem">
                    <Link to="/contactus">
                      <Text className="hover">CONTACT US</Text>
                    </Link>
                  </Box>
                </Box>

                <Box
                  display={{
                    base: "flex",
                    lg: "none",
                    xl: "none",
                    md: "flex",
                    sm: "flex",
                  }}
                  pt={{ base: "44px", md: "44px", sm: "44px" }}
                  pl={{ base: "440px", md: "200px", sm: "200px" }}
                >
                  <Button
                    onClick={() => setShowCard(!showCard)}
                    variant="none"
                    bg="#fff"
                    position="fixed"
                    zIndex="100"
                  >
                    <Icon as={showCard ? FaTimes : FaBars} boxSize={10} />
                  </Button>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <Box
        display={{
          base: "flex",
          sm: "flex",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
        mt={{ base: "105px", sm: "column", md: "column", lg: "120", xl: "row" }}
        h={{ base: "500px", lg: "550px" }}
        w={{base:'300%', lg:'100%'}}
        p='2px'
        overflow="hidden"
        position="relative"
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`banner-${index}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 2.5s ease-in-out",
            }}
          />
        ))}
      </Box>
    </div>
  );
}

export default Navbar;
