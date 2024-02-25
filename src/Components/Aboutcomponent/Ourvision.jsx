import { Box, Text, Image, Heading, Container } from "@chakra-ui/react";

function OurVision() {
  return (
    <Box mt={{ base: "50px", lg: "0px" }} w={{ base: "900px", lg: "1400px" }} >
      <Box
        display={{ base: "", lg: "flex" }}
        flexDir={{ base: "row", lg: "row" }}
        alignItems={{ base: "center", lg: "center" }}
      >
        <Container>
          <Box mt={{ base: "20px", lg: "0px" }} ml={{base:"240px", lg:"0px"}}>
            <Heading color="#ff5c23" fontSize={{ base: "35px", lg: "30px" }}>
              
                  OUR VISION
          <Box w={{base:"200px",lg:"170px"}} ml={{base:"0px",lg:"3px"}}  borderBottom="solid 3px #0b2558"></Box>

            </Heading>
            
            <Box w={{ base: "600px", lg: "700px" }} >
              
              <Text
                mt={{ base: "10px", lg: "20px" }}
                lineHeight={{ base: "8", lg: "8" }}
                fontSize={{ base: "25px", lg: "14px" }}
                textAlign="justify" 
              >
                At Ductofab, we have created an organization committed to
                providing complete customer satisfaction. We have devoted our
                facility, equipment, and personnel to one goal; that is To
                best our customer the best quality and value for money in
                Factory Fabricated Ducting and related components available
                today
              </Text>
            </Box>
          </Box>
        </Container>
        <Box>
          <Box
            mt={{ base: "-240px", lg: "20px" }}
            mb={{ base: "500px", lg: "0px" }}
          >
            <Image
              src="vision1.png"
              alt="vision"
              w={{ base: "340px", lg: "450px" }}
              ml={{ base: "30px", lg: "-20px" }}
             
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OurVision;
