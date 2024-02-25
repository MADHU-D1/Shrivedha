import { useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const content = [
  [
    <Box
      position="absolute"
      zIndex="170"
      //borderRadius="10px"
      m="10px"
      p="5px"
      w={{ base: "140%", lg: "60%" }}
     // bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-255px", lg: "0px" }}
      ml={{ base: "-150px", lg: "150px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center"  boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box lineHeight="8" ml='20px'>
          <Text>
            <span className="title">Corrosion Resistance</span> Galvanized steel
            provides excellent resistance to rust and corrosion, making it
            suitable for outdoor
            
             
              and high-humidity environments.
            
          </Text>
          <Text>
            <span className="title">Durable</span> It offers durability and
            longevity due to the protective zinc coating.
          </Text>
          <Text>
            <span className="title">Cost-Effective</span> Galvanized steel is
            cost-effective and widely available.
          </Text>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
      //borderRadius="10px"
      m="10px"
      p="5px"
      //bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-255px", lg: "0px" }}
      ml={{ base: "-160px", lg: "150px" }}
      w={{ base: "161%", lg: "60%" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center"  boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml="20px" lineHeight="8">
          <Text>
            <span className="title">Exceptional Corrosion Resistance</span>
            Stainless steel is highly resistant to rust and corrosion, even in
            harsh industrial or marine environments.
          </Text>
          <Text>
            <span className="title">Durability</span> It is exceptionally
            durable and has a long service life.
          </Text>
          <Text>
            <span className="title">Hygienic</span> Stainless steel is easy to
            clean and maintain, making it suitable for applications with strict
            hygiene requirements.
          </Text>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
      w={{ base: "162%", lg: "60%" }}
     // borderRadius="10px"
      m="10px"
      p="5px"
      justifyContent="center"
      //bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-250px", lg: "0px" }}
      ml={{ base: "-160px", lg: "150px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center" boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml={{base:"20px", lg:"20px"}} lineHeight="8">
          <Text>
            <span className="title">Lightweight</span> Aluminum MS flange ducts
            are lightweight, making them easy to handle and install.
          </Text>
          <Text>
            <span className="title">Corrosion Resistance</span> Aluminum is
            naturally resistant to corrosion.
          </Text>
          <Text>
            <span className="title">Ease of Installation</span> Its lightweight
            nature simplifies installation, especially in residential and light
            commercial applications
          </Text>
        </Box>
      </Box>
    </Box>,
  ],
];

export const DifferentTypesOfMsflangeDucts = () => {
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
              <Heading
                textAlign="center"
                fontFamily="poppins"
                fontSize="30px"
                
              >
                DIFFFERENT MATERIALS OF MILD STEEL (MS) FLANGE DUCTS AND THERE
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
            <Box p={{ base: "24px", lg: "14px" }}>
              <Button
                w={{ base: "60%", lg: "100%" }}
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
                Galvanized Steel Ms Flange duct
              </Button>
            </Box>

            <Box p={{ base: "24px", lg: "14px" }}>
              <Button
                w={{ base: "60%", lg: "100%" }}
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
                Stainless Steel Ms Flange duct
              </Button>
            </Box>

            <Box p={{ base: "24px", lg: "14px" }}>
              <Button
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                w={{ base: "60%", lg: "100%" }}
                style={
                  activeContentIndex === 2 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 2 ? "active" : ""}
                onClick={() => setActiveContentIndex(2)}
              >
                Aluminum Ms Flange duct
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
