import { useState } from "react";
import {
  Text,
  Box,
  Grid,
  GridItem,
  
  Image,
  Heading,
 
} from "@chakra-ui/react";

//import "../App.css";
 import { Link } from "react-router-dom";
import AutocomleteProducts from "../AutocompletProducts/AutocomleteProducts";
import Aboutus from "./Aboutus";
import OurVision from "./Ourvision";
import Ourmission from "./Ourmission";

import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";

function AboutusNavbar() {
  const [showCard, setShowCard] = useState(false);

  

  const handleMouseEnter = () => {
    setShowCard(true);
  };

  const handleMouseLeave = () => {
    setShowCard(false);
  };

  return (
    <Box>
       <Box>
       <Box  style={{
        flexGrow: 1,
        position: "fixed",
        top: 0,
        zIndex: 100,
        width: "100%",
        //backgroundColor: "#fff",
        
        
      }}>
      <Grid templateColumns="repeat(2, 1fr)">
      
      <Link to='/'>
      <Box   pl={{ base: "80px", lg: "80px" }}>
      <Heading
      
      fontSize={{ base: "40px", lg: "50px" }}
       // mb={{ base: "-10px", lg: "24px" }}
        color="#0b2558"
        pt={{base:"25px", lg:"0px"}}
        fontFamily='poppins'
      >
        SHRI<span style={{ marginLeft: "15px" }}>VEDAA</span>
      </Heading>
      <Box pt={{base:"0px",lg:"0px"}} ml="5px" color="#1399f0" position="absolute" zIndex="100" >
        <Text fontSize={{base:"14px", lg:"20px"}} >
          
          Engineering
          <span style={{ marginLeft: "10px" }}>Technologies</span>
        </Text>
      </Box>
    </Box>
    </Link>
        <GridItem>
          <Box
         
         
         
          >
            <Box display='flex' flexDir='row' justifyContent='space-around' pt="34px" pr="50px" >
            
              <Box
                //p={{ base: "20px", lg: "32px" }}
               // mt={{ base: "15px", lg: "30px" }}
                fontWeight="bold"
                className="menuItem"
                
              >
                <Link to="/">
                  <Text  className="hover">HOME</Text>
                </Link>
              </Box>
              <Box
               // p={{ base: "20px", lg: "32px" }}
               // mt={{ base: "15px", lg: "10px" }}
                fontWeight="bold"
                className="menuItem"
              >
                <Link to="/aboutus">
                  <Text>
                
                      ABOUT US
                  
                  </Text>
                </Link>
              </Box>
              <Box
                //p={{ base: "20px", lg: "32px" }}
                //mt={{ base: "15px", lg: "10px" }}
                fontWeight="bold"
                className="menuItem"
              >
                <Link to="/projects">
                  <Text>PROJECTS</Text>
                </Link>
              </Box>
              <Box
                //p={{ base: "20px", lg: "32px" }}
                //mt={{ base: "15px", lg: "10px" }}
                fontWeight="bold"
                className="menuItem"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/products">
                  <Text >PRODUCTS </Text>
                  
                </Link>
                {showCard && <AutocomleteProducts />}
                
              </Box>
              <Box
                //p={{ base: "20px", lg: "32px" }}
               // mt={{ base: "15px", lg: "10px" }}
                fontWeight="bold"
                className="menuItem"
              >
                <Link to="/contactus">
                  <Text className="hover">CONTACT US</Text>
                </Link>
              </Box>
            </Box>
            </Box>
          
        </GridItem>
      </Grid>
      </Box>
      <Box
      //display="felx"
       
        
        mt={{ base: "-370px", lg: "100px" }}
        mr={{ base: "90px", lg: "0px" }}
        maxW={{ base: "1050px", lg: "100%" }}
        ml={{ base: "30px", lg: "3px" }}
        
        //w={{base:"1440px", lg:"1360px"}} h={{base:"200px", lg:"300px"}}    mt={{base: "-450px", lg:"-480px"}} ml="30px"  

      >
        <Image src="/aboutus.png" alt="banner" />
        
      </Box>
      
      <Box>
      <Aboutus/>
      <OurVision/>
      <Ourmission/>
      <Shrivedhaafooter/>
    </Box>
   
    </Box>
    </Box>
   
  );
   }

 export default AboutusNavbar;



















