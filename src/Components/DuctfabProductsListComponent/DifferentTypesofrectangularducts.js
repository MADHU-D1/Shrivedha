// import { useState } from "react";
// import { Box, Heading, Text, Button } from "@chakra-ui/react";

// const content = [
//   [
//     <Box
//       position="absolute"
//       zIndex="160"
//       w={{ base: "139%", lg: "none" }}
//       mt={{ base: "-250px", lg: "0px" }}
//       ml={{ base: "-150px", lg: "0px" }}
//     >
//       <Box>
//         <Box>
//           <Text>
//             <span className="material">Material</span>Galvanized iron ducts are
//             made from sheet metal that has been coated with a layer of zinc to
//             prevent corrosion.
//             <li className="material">Advantages</li>
//           </Text>
//         </Box>
//         <Box>
//           <Text>
//             Corrosion Resistance The zinc coating provides excellent protection
//             against rust and corrosion.
//           </Text>
//           <Text>
//             Cost-Effective Galvanized iron is generally more affordable than
//             some other duct materials.
//           </Text>
//           <Text>
//             Durable: These ducts are known for their durability and longevity.
//           </Text>
//           <Text>
//             Suitable for General HVAC They are commonly used in HVAC systems for
//             heating and cooling.
//           </Text>
//         </Box>
//       </Box>
//     </Box>,
//   ],
//   [
//     <Box
//       position="absolute"
//       zIndex="160"
//       w={{ base: "139%", lg: "none" }}
//       mt={{ base: "-250px", lg: "0px" }}
//       ml={{ base: "-150px", lg: "0px" }}
//     >
//       <Box>
//         <Box>
//           <Text>
//             <span className="material">Material</span> Insulated ducts are
//             typically made from galvanized iron or other materials, with added
//             insulation layers.
//             <li className="material">Advantages</li>
//           </Text>
//         </Box>
//         <Box>
//           <Text>
//             Thermal Insulation The insulation layer helps maintain temperature
//             control and prevent condensation.
//           </Text>
//           <Text>
//             Energy Efficiency: Insulated ducts reduce heat loss or gain,
//             improving overall HVAC system efficiency.
//           </Text>
//           <Text>
//             Condensation Prevention The insulation prevents moisture buildup,
//             reducing the risk of mold growth.
//           </Text>
//           <Text>
//             Noise Reduction: Insulated ducts can also provide sound attenuation.
//           </Text>
//         </Box>
//       </Box>
//     </Box>,
//   ],
//   [
//     <Box
//       position="absolute"
//       zIndex="160"
//       w={{ base: "139%", lg: "none" }}
//       mt={{ base: "-250px", lg: "0px" }}
//       ml={{ base: "-150px", lg: "0px" }}
//     >
//       <Box>
//         <Box>
//           <Text>
//             <span className="material">Material</span> Aluminum ducts are
//             constructed from lightweight aluminum sheets.
//           </Text>
//           <li className="material">Advantages</li>
//         </Box>
//         <Box>
//           <Text>
//             Lightweight Aluminum is lighter than galvanized iron, making it
//             easier to handle and install.
//           </Text>
//           <Text>
//             Corrosion Resistance Aluminum naturally resists corrosion.
//           </Text>
//           <Text>
//             Aesthetic Appeal The clean, silver appearance of aluminum can be
//             aesthetically pleasing.
//           </Text>
//           <Text>
//             Suitable for Residential Applications Aluminum is often used in
//             residential HVAC systems.
//           </Text>
//         </Box>
//       </Box>
//     </Box>,
//   ],

//   [
//     <Box
//       position="absolute"
//       zIndex="160"
//       w={{ base: "139%", lg: "none" }}
//       mt={{ base: "-250px", lg: "0px" }}
//       ml={{ base: "-150px", lg: "0px" }}
//     >
//       <Box>
//         <Box>
//           <Text>
//             <span className="material">Material </span> Galvanized iron ducts
//             are made from sheet metal that has been coated with a layer of zinc
//             to prevent corrosion.
//           </Text>
//           <li className="material">Advantages</li>
//         </Box>
//         <Box>
//           <Text>
//             Exceptional Corrosion Resistance Stainless steel offers superior
//             resistance to rust and corrosion.
//           </Text>
//           <Text>
//             Hygienic It is easy to clean and maintain, making it suitable for
//             applications with strict hygiene requirements
//           </Text>
//           <Text>
//             High Strength Stainless steel is strong and can withstand high
//             temperatures.
//           </Text>
//           <Text>Longevity Stainless steel ducts have a long service life.</Text>
//         </Box>
//       </Box>
//     </Box>,
//   ],
// ];

// export const DifferentTypesofrectangularducts = () => {
//   const [activeContentIndex, setActiveContentIndex] = useState(0);

//   return (
//     <Box
//       display={{ base: "flex ", lg: "flex" }}
//       flexDir={{ base: "column", lg: "row" }}
//       justifyContent="center"
//     >
//       <Box>
//         <Box>
//           <Box>
//             <Box mr={{ base: "-760px", lg: "0px" }}>
//               <Heading
//                 textAlign="center"
//                 fontFamily="poppins"
//                 fontSize="18px"
//                 mt="10px"
//               >
//                 DIFFERENT TYPES OF RECTANGULAR DUCT AND THERE BENEFITS
//               </Heading>
//             </Box>
//           </Box>
//         </Box>

//         <Box mt="4" ml={{ base: "600px", lg: "0px" }}>
//           <Box
//             display="flex"
//             flexDir={{ base: "column", lg: "row" }}
//             ml={{ base: "-500px", lg: "0px" }}
//             justifyContent={{ base: "center", lg: "center" }}
//           >
//             <Box p={{ base: "14px", lg: "14px" }}>
//               <Button
//                 w={{ base: "60%", lg: "100%" }}
//                 fontSize="14px"
//                 bg="transparent"
//                 color="#12171a"
//                 style={
//                   activeContentIndex === 0 ? { background: "#ff5c23" } : {}
//                 }
//                 colorScheme="#2d6686"
//                 className={activeContentIndex === 0 ? "active" : ""}
//                 onClick={() => setActiveContentIndex(0)}
//               >
//                 Galvanized Iron Rectangular Duct
//               </Button>
//             </Box>

//             <Box p={{ base: "14px", lg: "14px" }}>
//               <Button
//                 fontSize="14px"
//                 bg="transparent"
//                 color="#12171a"
//                 w={{ base: "60%", lg: "100%" }}
//                 style={
//                   activeContentIndex === 1 ? { background: "#ff5c23" } : {}
//                 }
//                 colorScheme="#2d6686"
//                 className={activeContentIndex === 1 ? "active" : ""}
//                 onClick={() => setActiveContentIndex(1)}
//               >
//                 Insulated Rectangular Duct
//               </Button>
//             </Box>

//             <Box p={{ base: "14px", lg: "14px" }}>
//               <Button
//                 fontSize="14px"
//                 bg="transparent"
//                 color="#12171a"
//                 w={{ base: "60%", lg: "100%" }}
//                 style={
//                   activeContentIndex === 2 ? { background: "#ff5c23" } : {}
//                 }
//                 colorScheme="#2d6686"
//                 className={activeContentIndex === 2 ? "active" : ""}
//                 onClick={() => setActiveContentIndex(2)}
//               >
//                 Aluminum Rectangular Duct
//               </Button>
//             </Box>
//             <Box p={{ base: "14px", lg: "14px" }}>
//               <Button
//                 fontSize="14px"
//                 bg="transparent"
//                 color="#12171a"
//                 w={{ base: "60%", lg: "100%" }}
//                 style={
//                   activeContentIndex === 3 ? { background: "#ff5c23" } : {}
//                 }
//                 colorScheme="#2d6686"
//                 className={activeContentIndex === 3 ? "active" : ""}
//                 onClick={() => setActiveContentIndex(3)}
//               >
//                 Stainless Steel Rectangular Duct
//               </Button>
//             </Box>
//           </Box>
//           <Box>
//             <ul>
//               {content[activeContentIndex].map((item) => (
//                 <Box key={item}>{item}</Box>
//               ))}
//             </ul>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };



import { useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const content = [
  [
    <Box
      position="absolute"
      zIndex="170"
      w={{ base: "145%", lg: "72%" }}
      //borderRadius="10px"
     
      ml={{ base: "-160px", lg: "0px" }}
      mt={{ base: "-270px", lg: "0px" }}
    >
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        boxShadow="base"
        p={{ base: "6px", lg: "6px" }}
        rounded="md"
        bg="white"
      >
        <Box>
          <Text>
            <span className="material">Material</span>Galvanized iron ducts are
            made from sheet metal that has been coated with a layer of zinc to
            prevent corrosion.
          </Text>
          <li className="material">Advantages</li>
          <Box>
            <Text>
              Corrosion Resistance The zinc coating provides excellent
              protection against rust and corrosion.
            </Text>
            <Text>
              Cost-Effective Galvanized iron is generally more affordable than
              some other duct materials.
            </Text>
            <Text>
              Durable: These ducts are known for their durability and longevity.
            </Text>
            <Text>
              Suitable for General HVAC They are commonly used in HVAC systems
              for heating and cooling.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  ],
  [
    <Box
      position="absolute"
      zIndex="170"
      //borderRadius="10px"
     
      ml={{ base: "-150px", lg: "0px" }}
      w={{ base: "135%", lg: "72%" }}
      mt={{ base: "-270px", lg: "0px" }}
    >
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        boxShadow="base"
        p={{ base: "6px", lg: "6px" }}
        rounded="md"
        bg="white"
      >
        <Box>
          <Text>
            <span className="material">Material</span> Insulated ducts are
            typically made from galvanized iron or other materials, with added
            insulation layers.
          </Text>
          <li className="material">Advantages</li>
          <Box>
            <Text>
              Thermal Insulation The insulation layer helps maintain temperature
              control and prevent condensation.
            </Text>
            <Text>
              Energy Efficiency: Insulated ducts reduce heat loss or gain,
              improving overall HVAC system efficiency.
            </Text>
            <Text>
              Condensation Prevention The insulation prevents moisture buildup,
              reducing the risk of mold growth.
            </Text>
            <Text>
              Noise Reduction: Insulated ducts can also provide sound
              attenuation.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="170"
      w={{ base: "130%", lg: "72%" }}
     // borderRadius="10px"
     
      mt={{ base: "-260px", lg: "0px" }}
      ml={{ base: "-150px", lg: "0px" }}
    >
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        boxShadow="base"
        p={{ base: "6px", lg: "6px" }}
        rounded="md"
        bg="white"
      >
        <Box>
          <Text>
            <span className="material">Material</span> Aluminum ducts are
            constructed from lightweight aluminum sheets.
          </Text>
          <li className="material">Advantages</li>
          <Box>
            <Text>
              Lightweight Aluminum is lighter than galvanized iron, making it
              easier to handle and install.
            </Text>
            <Text>
              Corrosion Resistance Aluminum naturally resists corrosion.
            </Text>
            <Text>
              Aesthetic Appeal The clean, silver appearance of aluminum can be
              aesthetically pleasing.
            </Text>
            <Text>
              Suitable for Residential Applications Aluminum is often used in
              residential HVAC systems.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>,
  ],

  [
    <Box
      position="absolute"
      zIndex="170"
      w={{ base: "135%", lg: "72%" }}
      //borderRadius="10px"
     
      mt={{ base: "-260px", lg: "0px" }}
      ml={{ base: "-150px", lg: "0px" }}
    >
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        boxShadow="base"
        p={{ base: "6px", lg: "6px" }}
        rounded="md"
        bg="white"
      >
        <Box>
          <Text>
            <span className="material">Material </span> Galvanized iron ducts
            are made from sheet metal that has been coated with a layer of zinc
            to prevent corrosion.
          </Text>
          <li className="material">Advantages</li>
          <Box>
            <Text>
              Exceptional Corrosion Resistance Stainless steel offers superior
              resistance to rust and corrosion.
            </Text>
            <Text>
              Hygienic It is easy to clean and maintain, making it suitable for
              applications with strict hygiene requirements
            </Text>
            <Text>
              High Strength Stainless steel is strong and can withstand high
              temperatures.
            </Text>
            <Text>
              Longevity Stainless steel ducts have a long service life.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>,
  ],
];

export const DifferentTypesofrectangularducts = () => {
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
            <Box mr={{ base: "-700px", lg: "0px" }}>
              <Heading textAlign="center" fontSize='30px' fontFamily="poppins" >
                DIFFERENT TYPES OF RECTANGULAR DUCT AND THERE BENEFITS
              </Heading>
            </Box>
          </Box>
        </Box>

        <Box mt="4" ml={{ base: "600px", lg: "0px" }}>
          <Box
            display="flex"
            flexDir={{ base: "column", lg: "row" }}
            ml={{ base: "-500px", lg: "0px" }}
            justifyContent="center"
            textAlign="justify"
          >
            <Box p={{ base: "14px", lg: "5px" }}>
              <Button
                w={{ base: "60%", lg: "100%" }}
                //border='solid #AFC7DC 1.2px'
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                style={
                  activeContentIndex === 0 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                onClick={() => setActiveContentIndex(0)}
              >
                Galvanized Iron Rectangular Duct
              </Button>
            </Box>

            <Box p={{ base: "14px", lg: "5px" }}>
              <Button
                w={{ base: "60%", lg: "100%" }}
                fontSize="14px"
                style={
                  activeContentIndex === 1 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                bg="transparent"
                //border='solid #AFC7DC 1.2px'
                color="#12171a"
                onClick={() => setActiveContentIndex(1)}
              >
                Insulated Rectangular Duct
              </Button>
            </Box>

            <Box p={{ base: "14px", lg: "5px" }}>
              <Button
                fontSize="14px"
                w={{ base: "60%", lg: "100%" }}
                style={
                  activeContentIndex === 2 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                bg="transparent"
                //border='solid #AFC7DC 1.2px'
                color="#12171a"
                onClick={() => setActiveContentIndex(2)}
              >
                Aluminum Rectangular Duct
              </Button>
            </Box>
            <Box p={{ base: "14px", lg: "5px" }}>
              <Button
                fontSize="14px"
                w={{ base: "60%", lg: "100%" }}
                // bg='transparent'
                //border='solid #AFC7DC 1.2px'
                color="#12171a"
                style={
                  activeContentIndex === 3 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 3 ? "active" : ""}
                onClick={() => setActiveContentIndex(3)}
              >
                Stainless Steel Rectangular Duct
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

