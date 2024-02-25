import { useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const content = [
  [
    <Box
      position="absolute"
      zIndex="170"
      //bg={{ base: "none", lg: "#bad9fc" }}
      w={{ base: "130%", lg: "65%" }}
      borderRadius="10px"
     
      ml={{ base: "-180px", lg: "60px" }}
      mt={{ base: "-250px", lg: "0px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center"  boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml='10px'>
          <Box>
            <Box>
              <Text>
                <span className="material">Material </span>Galvanized iron
                spiral flat oval ducts are made from galvanized steel sheets
                that are formed into a flattened oval shape.
              </Text>
            </Box>
            <Box>
              <li className="material">Advantages</li>
            </Box>
          </Box>
          <Box>
            <Text>
              Corrosion Resistance The zinc coating on galvanized iron provides
              excellent corrosion resistance, making it suitable<br></br> for a
              variety of environments.
            </Text>
            <Text>
              Space Efficiency The flat oval shape maximizes space efficiency,
              making it ideal for installations with limited space.
            </Text>
            <Text>
              Durability Galvanized iron is known for its durability and
              longevity, ensuring a long service life
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
      bg={{ base: "none", lg: "#bad9fc" }}
     // borderRadius="10px"
      
      ml={{ base: "-180px", lg: "60px" }}
      w={{ base: "135%", lg: "65%" }}
      mt={{ base: "-250px", lg: "0px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center"  boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml='10px'>
          <Box>
            <Text>
              <span className="material">Material</span> Insulated spiral flat
              oval ducts are typically constructed with a galvanized iron or
              aluminum outer shell and include insulation the duct.
            </Text>
            <li className="material">Advantages</li>
          </Box>
          <Box>
            <Text>
              Thermal Insulation The insulation layer helps maintain consistent
              temperatures and prevents condensation within the duct, making it
              <br></br> suitable for both heating and cooling applications.
            </Text>
            <Text>
              Energy Efficiency Insulated spiral flat oval ducts reduce heat
              loss or gain, improving HVAC system efficiency.
            </Text>
            <Text>
              Reduced Noise The insulation layer can also provide sound
              attenuation, reducing noise transmission through the duct system.
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
      w={{ base: "140%", lg: "65%" }}
      //borderRadius="10px"
     
      //bg={{ base: "none", lg: "#bad9fc" }}
      mt={{ base: "-250px", lg: "0px" }}
      ml={{ base: "-180px", lg: "60px" }}
    >
      <Box display="flex" flexDir="row" justifyContent="center"  boxShadow='base' p={{base:'6px', lg:'6px'}} rounded='md' bg='white'>
        <Box ml='10px'>
          <Box>
            <Text>
              <span className="material">Material</span> Double-wall spiral flat
              oval ducts consist of an inner liner and an outer shell, often
              both made from galvanized steel or other materials.
            </Text>
            <li className="material">Advantages</li>
          </Box>
          <Box>
            <Text>
              Air Tightness The double-wall construction minimizes air leakage,
              ensuring that conditioned air remains inside the duct, improving
              energy efficiency.
            </Text>
            <Text>
              Durability Double-wall ducts offer added strength and protection,
              making them suitable for demanding applications.
            </Text>
            <Text>
              Aesthetic Appeal The clean, silver appearance of aluminum can be
              aesthetically pleasing.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  ],
];

export const Differenttypesofspiralduct = () => {
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
                DIFFERENT MATERIALS OF SPIRAL FLAT OVAL DUCT AND THERE BENEFITS
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
            <Box p={{ base: "24px", lg: "5px" }}>
              <Button
                w={{ base: "65%", lg: "100%" }}
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                style={
                  activeContentIndex === 0 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                onClick={() => setActiveContentIndex(0)}
              >
                Galvanized Iron Spiral Flat Oval Duct
              </Button>
            </Box>

            <Box p={{ base: "24px", lg: "5px" }}>
              <Button
                w={{ base: "60%", lg: "100%" }}
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                style={
                  activeContentIndex === 1 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                onClick={() => setActiveContentIndex(1)}
              >
                Insulated Spiral Flat Oval Duct
              </Button>
            </Box>

            <Box p={{ base: "24px", lg: "5px" }}>
              <Button
                w={{ base: "60%", lg: "100%" }}
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                style={
                  activeContentIndex === 2 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                onClick={() => setActiveContentIndex(2)}
              >
                Double-Wall Spiral Flat Oval Duct
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
