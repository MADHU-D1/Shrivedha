// import { useState } from "react";
// import { Box, Heading, Text, Button } from "@chakra-ui/react";

// const content = [
//   [
//     <Box
//       position="absolute"
//       zIndex="170"
//       //borderRadius="10px"
     
//       //bg={{ base: "none", lg: "#bad9fc" }}
//       w={{ base: "150%", lg: "60%" }}
//       mt={{ base: "-200px", lg: "0px" }}
//       ml={{ base: "-150px", lg: "0px" }}
//     >
//       <Box
//         display="flex"
//         flexDir={{ base: "column", lg: "row" }}
//         justifyContent="center"
//         boxShadow='base' p={{base:'6px', lg:'6'}} rounded='md' bg='white'
//       >
//         <Box>
//           <Text className="material">Benefits</Text>
//         </Box>
//         <Box ml={{ base: "0px", lg: "-65px" }} mt={{ base: "0px", lg: "20px" }}>
//           <Text>
//             Durability Galvanized steel is known for its strength and
//             durability, ensuring a long service life for oval VCDS.
//           </Text>
//           <Text>
//             Corrosion Resistance The galvanized coating provides excellent
//             resistance to rust and corrosion, making it suitable for both indoor
//             and outdoor HVAC applications
//           </Text>
//           <Text className="list">
//             Cost-Effective Galvanized steel is a cost-effective material choice
//             for oval VCDs.
//           </Text>
//         </Box>
//       </Box>
//     </Box>,
//   ],
//   [
//     <Box
//       position="absolute"
//       zIndex="160"
//       //bg={{ base: "none", lg: "#bad9fc" }}
//       w={{ base: "139%", lg: "60%" }}
//       //borderRadius="10px"
      
//       mt={{ base: "-200px", lg: "0px" }}
//       ml={{ base: "-150px", lg: "0px" }}
//     >
//       <Box display="flex" flexDir="row" justifyContent="center"  boxShadow='base' p={{base:'6px', lg:'6'}} rounded='md' bg='white'>
//         <Box>
//           <Text className="material">Benefits</Text>
//         </Box>
//         <Box  ml={{ base: "0px", lg: "-65px" }} mt={{ base: "0px", lg: "20px" }}>
//           <Text>
//             Lightweight Aluminum oval VCDs are lightweight, making them easy to
//             handle and install.
//           </Text>
//           <Text>
//             Corrosion Resistance Aluminum is naturally resistant to corrosion,
//             making it suitable for various HVAC applications.
//           </Text>
//           <Text>
//             Energy Efficiency Aluminum's lightweight nature can contribute to
//             energy efficiency in HVAC systems, reducing the <br></br>load on
//             fans and motors
//           </Text>
//         </Box>
//       </Box>
//     </Box>,
//   ],
//   [
//     <Box
//       position="absolute"
//       zIndex="160"
//       //bg={{ base: "none", lg: "#bad9fc" }}
//       w={{ base: "149%", lg: "60%" }}
//       //borderRadius="10px"
     
//       mt={{ base: "-200px", lg: "0px" }}
//       ml={{ base: "-150px", lg: "0px" }}
//     >
//       <Box display="flex" flexDir="row" justifyContent="center" boxShadow='base' p={{base:'6px', lg:'6'}} rounded='md' bg='white'>
//         <Box>
//           <Text className="material">Benefits</Text>
//         </Box>
//         <Box ml={{ base: "0px", lg: "-65px" }} mt={{ base: "0px", lg: "20px" }}>
//           <Text>
//             Chemical Resistance PVC oval VCDs are resistant to chemical
//             corrosion, making them suitable for applications exposed<br></br>
//             to corrosive gases or chemicals.
//           </Text>
//           <Text>Lightweight PVC is lightweight and easy to work with.</Text>
//           <Text>
//             Affordability PVC oval VCDs are often cost-effective, making them a
//             budget-friendly choice for certain applications.
//           </Text>
//         </Box>
//       </Box>
//     </Box>,
//   ],
// ];

// export const DifferentMaterialsOvalvcd = () => {
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
//               <Heading textAlign="center" fontFamily="poppins" fontSize='30px'>
//                 DIFFERENT MATERIALS OF OVAL VCD AND THERE BENEFITS
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
//                 bg='transparent'
//                 color='#12171a'
//                 style={
//                   activeContentIndex === 0 ? { background: "#ff5c23" } : {}
//                 }
//                 colorScheme="#2d6686"
//                 className={activeContentIndex === 0 ? "active" : ""}
//                 onClick={() => setActiveContentIndex(0)}
//               >
//                 Galvanized Steel Oval VCD
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
//                 Aluminum Oval VCD
//               </Button>
//             </Box>

//             <Box p={{ base: "14px", lg: "14px" }}>
//               <Button
//               fontSize="14px"
//                 bg='transparent'
//                 color='#12171a'
//                 w={{ base: "60%", lg: "100%" }}
//                 style={
//                   activeContentIndex === 2 ? { background: "#ff5c23" } : {}
//                 }
//                 colorScheme="#2d6686"
//                 className={activeContentIndex === 2 ? "active" : ""}
//                 onClick={() => setActiveContentIndex(2)}
//               >
//                 PVC (Polyvinyl Chloride) Oval VCD
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
      
      w={{ base: "150%", lg: "60%" }}
      mt={{ base: "-200px", lg: "0px" }}
      ml={{ base: "-150px", lg: "0px" }}
    >
      <Box
        display="flex"
        flexDir={{ base: "column", lg: "row" }}
        justifyContent="center"
        boxShadow="base"
        p={{ base: "6px", lg: "6" }}
        rounded="md"
        bg="white"
      >
        <Box>
          <Text className="material">Benefits</Text>
        </Box>
        <Box ml={{ base: "0px", lg: "-65px" }} mt={{ base: "0px", lg: "20px" }}>
          <Text>
            Durability Galvanized steel is known for its strength and
            durability, ensuring a long service life for oval VCDS.
          </Text>
          <Text>
            Corrosion Resistance The galvanized coating provides excellent
            resistance to rust and corrosion, making it suitable for both indoor
            and outdoor HVAC applications
          </Text>
          <Text className="list">
            Cost-Effective Galvanized steel is a cost-effective material choice
            for oval VCDs.
          </Text>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
      
      w={{ base: "139%", lg: "60%" }}
      
      mt={{ base: "-200px", lg: "0px" }}
      ml={{ base: "-150px", lg: "0px" }}
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
        <Box ml={{ base: "0px", lg: "-65px" }} mt={{ base: "0px", lg: "20px" }}>
          <Text>
            Lightweight Aluminum oval VCDs are lightweight, making them easy to
            handle and install.
          </Text>
          <Text>
            Corrosion Resistance Aluminum is naturally resistant to corrosion,
            making it suitable for various HVAC applications.
          </Text>
          <Text>
            Energy Efficiency Aluminum's lightweight nature can contribute to
            energy efficiency in HVAC systems, reducing the <br></br>load on
            fans and motors
          </Text>
        </Box>
      </Box>
    </Box>,
  ],
  [
    <Box
      position="absolute"
      zIndex="160"
      //bg={{ base: "none", lg: "#bad9fc" }}
      w={{ base: "149%", lg: "60%" }}
      //borderRadius="10px"

      mt={{ base: "-200px", lg: "0px" }}
      ml={{ base: "-150px", lg: "0px" }}
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
        <Box ml={{ base: "0px", lg: "-65px" }} mt={{ base: "0px", lg: "20px" }}>
          <Text>
            Chemical Resistance PVC oval VCDs are resistant to chemical
            corrosion, making them suitable for applications exposed<br></br>
            to corrosive gases or chemicals.
          </Text>
          <Text>Lightweight PVC is lightweight and easy to work with.</Text>
          <Text>
            Affordability PVC oval VCDs are often cost-effective, making them a
            budget-friendly choice for certain applications.
          </Text>
        </Box>
      </Box>
    </Box>,
  ],
];

export const DifferentMaterialsOvalvcd = () => {
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
                fontSize="18px"
                mt="10px"
              >
                DIFFERENT MATERIALS OF OVAL VCD AND THERE BENEFITS
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
                Galvanized Steel Oval VCD
              </Button>
            </Box>

            <Box p={{ base: "14px", lg: "14px" }}>
              <Button
                fontSize="14px"
                bg="transparent"
                color="#12171a"
                w={{ base: "60%", lg: "100%" }}
                style={
                  activeContentIndex === 1 ? { background: "#ff5c23" } : {}
                }
                colorScheme="#2d6686"
                className={activeContentIndex === 1 ? "active" : ""}
                onClick={() => setActiveContentIndex(1)}
              >
                Aluminum Oval VCD
              </Button>
            </Box>

            <Box p={{ base: "14px", lg: "14px" }}>
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
                PVC (Polyvinyl Chloride) Oval VCD
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

