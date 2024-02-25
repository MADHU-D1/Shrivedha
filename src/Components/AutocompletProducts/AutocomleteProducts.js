import React from "react";

import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const text = {
  ":hover": {
    color: "blue",

    zIndex: "150",
    fontWeight: "700",
  },
};
function AutocomleteProducts() {
  return (
    <Box
      position={{ base: "absolute", lg: "absolute" }}
      zIndex={{ base: "100", lg: "100" }}
      pt="15px"
      alignItems="center"
      
    >
      <Box
        color="Black"
        h="460px"
        w="285px"
        // borderRadius="10px"
          p="20px"
        // bg="#fff"
        fontWeight="medium"
        alignItems="start"
        boxShadow="base"
        //p={{ base: "6px", lg: "6" }}
        rounded="md"
        bg="white"
      >
        <Box sx={text} m="15px">
        
          <Link to="/rectangular"> RECTANGULAR DUCT</Link>
        </Box>
        <hr></hr>
        <Box sx={text} m="15px">
          <Link to="/spiralflatovalduct"> SPIRAL FLAT OVAL DUCT</Link>
        </Box>
        <hr></hr>
        <Box sx={text} m="15px">
          <Link to="/spiralroundduct"> SPIRAL ROUND DUCT</Link>
        </Box>
        <hr></hr>
        <Box sx={text} m="15px">
          <Link to="/msflangeduct"> MS - FLANGE DUCT</Link>
        </Box>
        <hr></hr>
        <Box sx={text} m="15px">
          <Link to="/sliponflangeduct"> SLIP ON FLANGE DUCT</Link>
        </Box>
        <hr></hr>
        <Box sx={text} m="15px">
          <Link to="/roundtoaquareduct"> ROUND TO SQUARE DUCT</Link>
        </Box>
        <hr></hr>
        <Box sx={text} m="15px">
          <Link to="/ovalvcd"> OVAL VCD</Link>
        </Box>
        <hr></hr>
        <Box sx={text} m="15px">
          <Link to="/lpplenumterminalbox"> LP PLENUM/TERMINAL BOX</Link>
        </Box>
        <hr></hr>
      </Box>
    </Box>
  );
}

export default AutocomleteProducts;
