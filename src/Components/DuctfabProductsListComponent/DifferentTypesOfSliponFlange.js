import { useState } from "react";
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";

const content = [
  [
    <Box
      position="absolute"
      zIndex="170"
      w={{ base: "138%", lg: "65%" }}
      // borderRadius="10px"
    
      // bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-250px", lg: "0px" }}
      ml={{ base: "-140px", lg: "40px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center" boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml='10px'>
          <Box>
            <li className="material">Benefits</li>
          </Box>
          <Box>
            <Text>
              Corrosion Resistance Galvanized steel provides excellent
              resistance to rust and corrosion, making it suitable for outdoor
              and high-humidity
              <Box ml="1px"> environments.</Box>
            </Text>
            <Text>
              Durable It offers durability and longevity due to the protective
              zinc coating.
            </Text>
            <Text>
              Cost-Effective Galvanized steel is cost-effective and widely
              available.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
      w={{ base: "142%", lg: "65%" }}
      //borderRadius="10px"
   
      
      //bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-250px", lg: "0px" }}
      ml={{ base: "-140px", lg: "40px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center" boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml='12px'>
          <Box>
            <li className="material">Benefits</li>
          </Box>
          <Box>
            <Text>
              Lightweight Aluminum slip-on flange ducts are lightweight, making
              them easy to handle and install.
            </Text>
            <Text>
              Corrosion Resistance Aluminum is naturally resistant to corrosion.
            </Text>
            <Text>
              Ease of Installation Its lightweight nature simplifies
              installation, especially in residential and light commercial
              applications.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
      w={{ base: "133%", lg: "65%" }}
     // borderRadius="10px"
      
     // bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-250px", lg: "0px" }}
      ml={{ base: "-140px", lg: "40px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center" boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml='10px'>
          <Box >
            <li className="material">Benefits</li>
          </Box>
          <Box>
            <Text>
              Durability Mild steel is known for its strength and durability,
              ensuring a long service life for slip-on flange ducts.
            </Text>
            <Text>
              Cost-Effective It is generally more affordable compared to some
              other materials.
            </Text>
            <Text>
              Versatility MS ducts can be used in various applications, making
              them suitable for a wide range of HVAC projects.
            </Text>
            <Text>
              Customization MS flange ducts can be customized to meet specific
              project requirements in terms of size and shape.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>,
  ],
];

export const DifferentTypesOfSliponFlange = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <Box
      display={{ base: "flex ", lg: "flex" }}
      flexDir={{ base: "column", lg: "row" }}
      justifyContent="center"
    >
      <Box>
        <Box>
          <Box>
            <Box mr={{ base: "-760px", lg: "0px" }}>
              <Heading textAlign="center" fontFamily="poppins" fontSize='30px'>
                DIFFERENT MATERIALS OF SLIP ON FLANGE DUCT AND THEIR BENEFITS
              </Heading>
            </Box>
          </Box>
        </Box>

        <Box mt="4" ml={{ base: "600px", lg: "0px" }}>
          <Box
            display="flex"
            flexDir={{ base: "column", lg: "row" }}
            ml={{ base: "-500px", lg: "0px" }}
            justifyContent={{ base: "center", lg: "center" }}
          >
            <Box p={{ base: "24px", lg: "14px" }}>
              <Button
                w={{ base: "65%", lg: "100%" }}
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                style={
                  activeContentIndex === 0 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 0 ? "active" : ""}
                onClick={() => setActiveContentIndex(0)}
              >
                Galvanized Steel Slip On Flange Duct
              </Button>
            </Box>

            <Box p={{ base: "24px", lg: "14px" }}>
              <Button
                w={{ base: "65%", lg: "100%" }}
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                style={
                  activeContentIndex === 1 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 1 ? "active" : ""}
                onClick={() => setActiveContentIndex(1)}
              >
                Aluminum Slip On Flange Duct
              </Button>
            </Box>

            <Box p={{ base: "24px", lg: "14px" }}>
              <Button
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                w={{ base: "65%", lg: "100%" }}
                style={
                  activeContentIndex === 2 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 2 ? "active" : ""}
                onClick={() => setActiveContentIndex(2)}
              >
                Mild Steel Slip On Flange Duct
              </Button>
            </Box>
          </Box>
          <Box>
            <ul>
              {content[activeContentIndex].map((item) => (
                <Box key={item}>{item}</Box>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
