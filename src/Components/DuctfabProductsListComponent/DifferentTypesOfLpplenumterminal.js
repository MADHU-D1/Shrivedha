import { useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const content = [
  [
    <Box
      position="absolute"
      zIndex="170"
      w={{ base: "138%", lg: "76%" }}
      //borderRadius="10px"
     
     // bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-200px", lg: "0px" }}
      ml={{ base: "-100px", lg: "10px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center"  boxShadow='base' p={{base:'6px', lg:'6'}} rounded='md' bg='white'>
        <Box>
          <Text className="material">Benefits</Text>
        </Box>
        <Box ml="-65px" mt="20px">
          <Text>
            Durability Galvanized steel is known for its strength and
            durability, ensuring a long service life for LP Plenums.
          </Text>
          <Text>
            Corrosion Resistance The galvanized coating provides excellent
            resistance to rust and corrosion, making it suitable for both indoor
            and outdoor HVAC applications.
          </Text>
          <Text>
            Cost-Effective Galvanized steel is a cost-effective material choice
            for LP Plenums.
          </Text>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
      w={{ base: "138%", lg: "76%" }}
      //borderRadius="10px"
      
      //bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-200px", lg: "0px" }}
      ml={{ base: "-100px", lg: "10px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center"  boxShadow='base' p={{base:'6px', lg:'6'}} rounded='md' bg='white'>
        <Box>
          <Text className="material">Benefits</Text>
        </Box>
        <Box ml="-65px" mt="20px">
          <Text>
            Lightweight Aluminum LP Plenums are lightweight, making them easy to
            handle and install.
          </Text>
          <Text>
            Corrosion Resistance Aluminum is naturally resistant to corrosion,
            making it suitable for various HVAC applications.
          </Text>
          <Text>
            Energy Efficiency Aluminum's lightweight nature can contribute to
            energy efficiency in HVAC systems, reducing the load on fans and
            motors.
          </Text>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
      w={{ base: "138%", lg: "76%" }}
      //borderRadius="10px"
      
      //bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-200px", lg: "0px" }}
      ml={{ base: "-100px", lg: "10px" }}
    >
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        boxShadow="base"
        p={{ base: "6px", lg: "6" }}
        rounded="md"
        bg="white"
      >
        <Box>
          <Text className="material">Benefits</Text>
        </Box>
        <Box ml="-65px" mt="20px">
          <Text>
            Exceptional Corrosion Resistance Stainless steel is highly resistant
            to rust and corrosion, even in harsh environments, making it ideal
            for applications where longevity and corrosion resistance are
            crucial.
          </Text>
          <Text>
            Durability: Stainless steel LP Plenums have a long service life and
            are well-suited for demanding industrial or marine applications.
          </Text>
          <Text>
            Hygienic Stainless steel is easy to clean and maintain, making it
            suitable for environments with strict hygiene requirements.
          </Text>
        </Box>
      </Box>
    </Box>,
  ],
];

export const DifferentTypesOfLpplenumterminal = () => {
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
            <Box mr={{ base: "-760px", lg: "0px" }} mt={{base:'0px', lg:"10px"}}>
              <Heading textAlign="center" fontFamily="poppins" fontSize='30px'>
                DIFFERENT MATERIALS OF LP PLENUM / TERMINAL BOX AND THERE
                BENEFITS
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
            <Box p={{ base: "14px", lg: "14px" }}>
              <Button
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                w={{ base: "70%", lg: "100%" }}
                style={
                  activeContentIndex === 0 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 0 ? "active" : ""}
                onClick={() => setActiveContentIndex(0)}
              >
                Galvanized Steel Lp Plenum / Terminal box
              </Button>
            </Box>

            <Box p={{ base: "14px", lg: "14px" }}>
              <Button
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                w={{ base: "70%", lg: "100%" }}
                style={
                  activeContentIndex === 1 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 1 ? "active" : ""}
                onClick={() => setActiveContentIndex(1)}
              >
                Aluminum Oval Lp Plenum / Terminal box
              </Button>
            </Box>

            <Box p={{ base: "14px", lg: "14px" }}>
              <Button
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                w={{ base: "70%", lg: "100%" }}
                style={
                  activeContentIndex === 2 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 2 ? "active" : ""}
                onClick={() => setActiveContentIndex(2)}
              >
                Stainless Steel Lp Plenum / Terminal box
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
