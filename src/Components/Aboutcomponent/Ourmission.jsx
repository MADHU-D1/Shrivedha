import { Box, Text, Heading, Image, Container } from "@chakra-ui/react";
function Ourmission() {
  return (
    <Box mt={{ base: "20px", lg: "60px" }} w={{ base: "1000px", lg: "1200px" }} ml={{base:"50px",lg:"0px"}}>
      <Box
        display={{ base: "flex", lg: "flex" }}
        flexDir={{ base: "row", lg: "row" }}
        alignItems={{ base: "center", lg: "center" }}
      >
        <Box mt={{ base: "-400px", lg: "0px" }}>
          <Box>
            <Image
              Image
              src="vision.png"
              alt="vision"
              mt={{ base: "0px", lg: "20px" }}
              w={{ base: "300px", lg: "400px" }}
              ml={{ base: "0px", lg: "200px" }}
            />
          </Box>
        </Box>
        <Container>
          <Box mt={{ base: "-360px", lg: "0px" }}  ml={{base:"0px", lg:"80px"}}>
            <Heading color="#ff5c23" fontSize={{ base: "35px", lg: "30px" }} fontFamily='poppins'>
             
                
                  OUR MISSION
                  <Box w={{base:"228px",lg:"194px"}} ml={{base:"0px",lg:"3px"}}  borderBottom="solid 3px #0b2558"></Box>
 
             
            </Heading>
            <Box w={{ base: "600px", lg: "600px" }}>
              
              <Text
              
                mt={{ base: "10px", lg: "20px" }}
                lineHeight={{ base: "8", lg: "8" }}
                fontSize={{ base: "25px", lg: "14px" }}
                textAlign="justify" 
              >
                Creating & maintaining good professional relation with clients
                Providing quality material in best competitive prices Providing
                best of technical support and guidance Providing and maintaining
                Quality Craftsmanship
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Ourmission;
