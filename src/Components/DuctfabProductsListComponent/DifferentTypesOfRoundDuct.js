import { useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const content = [
  [
    <Box
      position="absolute"
      zIndex="170"
      w={{ base: "148%", lg: "65%" }}
      //borderRadius="10px"
      
      //bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-240px", lg: "0px" }}
      ml={{ base: "-180px", lg: "100px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center" boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml='10px'>
          <Text className="material">Benefits</Text>
        </Box>
        <Box ml="-65px" mt="20px">
          <Text>
            Durability Sheet metal transitions are durable and can withstand a
            range of environmental conditions.
          </Text>
          <Text>
            Customization Sheet metal can be easily customized to match specific
            project requirements in terms of size, dimensions, and angles.
          </Text>
          <Text>
            Airtightness When properly fabricated and installed, sheet metal
            transitions provide airtight connections, reducing air leakage and
            maintaining system efficiency.
          </Text>
          <Text>
            Resistance to Corrosion Stainless steel and aluminum sheet metal
            transitions are highly resistant to corrosion, making them suitable
            for a variety of applications.
          </Text>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
      w={{ base: "158%", lg: "65%" }}
      //borderRadius="10px"
      
      //bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-240px", lg: "0px" }}
      ml={{ base: "-180px", lg: "100px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center"  boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml='10px'>
          <Text className="material">Benefits</Text>
        </Box>
        <Box ml="-65px" mt="20px">
          <Text>
            Corrosion Resistance FRP transitions are highly corrosion-resistant,
            even in aggressive chemical environments, making them ideal for
            certain industrial applications.
          </Text>
          <Text>
            Lightweight FRP is lightweight, making it easy to handle and
            install.
          </Text>
          <Text>
            Customization FRP transitions can be customized to meet specific
            project requirements.
          </Text>
          <Text>
            Strength FRP transitions provide good structural strength, ensuring
            longevity.
          </Text>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
      w={{ base: "160%", lg: "65%" }}
      //borderRadius="10px"
     
      //bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-240px", lg: "0px" }}
      ml={{ base: "-180px", lg: "100px" }}

    >
      <Box display="flex" flexDir="row" justifyContent="center"  boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white' >
        <Box ml='10px'>
          <Text className="material">Benefits</Text>
        </Box>
        <Box ml="-65px" mt="20px">
          <Text>
            Chemical Resistance PVC transitions are resistant to chemical
            corrosion, making them suitable for applications exposed to
            corrosive gases or chemicals.
          </Text>
          <Text>Lightweight PVC is lightweight and easy to work with.</Text>
          <Text>
            Affordability PVC transitions are often cost-effective, making them
            a budget-friendly choice for certain applications.
          </Text>
        </Box>
        
      </Box>
    </Box>
  ],
];

export const DiffetentTypesOfRoundDucts = () => {
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
                DIFFERENT MATERIALS OF ROUND TO SQUARE DUCT AND THERE BENEFITS
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
               
                w={{ base: "60%", lg: "100%" }}
                fontSize="14px"
                bg='transparent'
                color='#12171a'
                style={
                  activeContentIndex === 0 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 0 ? "active" : ""}
                onClick={() => setActiveContentIndex(0)}
              >
                Sheet Metal
              </Button>
            </Box>

            <Box p={{ base: "24px", lg: "14px" }}>
              <Button
                
              fontSize="14px"
              bg='transparent'
              color='#12171a'
                w={{ base: "60%", lg: "100%" }}
                style={
                  activeContentIndex === 1 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 1 ? "active" : ""}
                onClick={() => setActiveContentIndex(1)}
              >
                Fiberglass Reinforced Plastic
              </Button>
            </Box>

            <Box p={{ base: "24px", lg: "14px" }}>
              <Button
              fontSize="14px"
              bg='transparent'
              color='#12171a'
              
                w={{ base: "60%", lg: "100%" }}
                style={
                  activeContentIndex === 2 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 2 ? "active" : ""}
                onClick={() => setActiveContentIndex(2)}
              >
                PVC Polyvinyl
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
