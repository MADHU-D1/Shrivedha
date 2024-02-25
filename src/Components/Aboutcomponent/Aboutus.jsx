import "./Aboutus.css";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
function Aboutus() {
  return (
    <Center>
      <Box flexDir={{ base: "row", lg: "row" }} p={{ base: "0px", lg: "80px" }}>
        <Box
          mt={{ base: "100px", lg: "0px" }}
          ml={{ base: "800px", lg: "0px" }}
        >
          <Heading color="#ff5c23" fontSize={{ base: "40px", lg: "30px" }}>
            
            ABOUT US
          </Heading>
          <Box
            w={{ base: "200px", lg: "145px" }}
            ml={{ base: "0px", lg: "0px" }}
            borderBottom="solid 3px #0b2558"
          ></Box>
        </Box>

        <Box
          mt={{ base: "10px", lg: "10px" }}
          ml={{ base: "500px", lg: "0px" }}
          w={{ base: "80%", lg: "100%" }}
        >
          <Text
            lineHeight="8"
            fontSize={{ base: "25px", lg: "15px" }}
            textAlign="justify"
          >
            <Box>
              <span className="span">Shri Vedaa Engineering Technologies</span>
              is a company pioneer in manufacturing Factory Fabricated,
              Rectangular, Spiral Round & Spiral Oval (Elliptical) ducts.
            </Box>
            <br></br>
            The promoters have almost 25 years of experience in selling GI
            sheets/coils as they are among the largest distributors for JINDAL,
            ISPAT, and SAIL thus assuring quality right at the source, and have
            experienced design staff who offer support in all aspects of
            prefabricated duct manufacturing. From detailed fabrication drawings
            to actual production, the staff has the knowledge and experience to
            design each custom prefabricated duct for maximum function and
            efficiency. Our factory and equipment rely on the most modern
            technology to ensure consistent product superiority. We recognize
            our customers as our partners. We strive to exceed their
            expectations by offering the broadest product line in the industry,
            competive pricing and focus on supply chain efficiency. When you
            partner with <br></br>
            <span className="span"> Shri Vedaa Engineering Technologies </span>
            you can rely on our services including a strategically located
            factory, Enhanced quick deliveries, Excellent fill rates, and Short
            lead times.
          </Text>
        </Box>

        <Box
          borderBottom={{ base: "none", lg: "solid red 2px" }}
          w="1140px"
          mt="60px"
        ></Box>
      </Box>
    </Center>
  );
}

export default Aboutus;
