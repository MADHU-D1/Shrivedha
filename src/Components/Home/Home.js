//import React from 'react'
import Choose from "../Chooseus/Choose";
import Philisophy from "../Philisophycomponent/Ourphilisophy";
import Ductinds from "../Ductingsoluctions/Ductings";
import Navbar from "../Navbar";
import Shrivedhaafooter from "../Shrivedhadashbord/Shrivedhaafooter";

import { Box } from "@chakra-ui/react";
import Ourclilents from "../OurcliIents";
import Achievments from "../Achievments";
export const Home = () => {
  return (
    <Box className="appjs" >
      <Box
      
      >
        <Navbar />
      </Box>
      <Ductinds />
      <Choose />
      <Philisophy />

      <Achievments />
      <Ourclilents />

      <Box mt="30px">
        <Shrivedhaafooter />
      </Box>
    </Box>
  );
};



