import { Box, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Achievements() {
  const [value, setValue] = useState(0);
  const [experience, setExperience] = useState(0);
  const [trustedPartners, setTrustedPartners] = useState(0);
  const [products, setProducts] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const intervalId = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue >= 1800) {
            clearInterval(intervalId);
            return 10000
          }
          return prevValue + 1;
        });
      }, 0.5);

      return () => clearInterval(intervalId);
    }
  }, [inView]);

  useEffect(() => {
    
   if(inView){
    const intervalId = setInterval(() => {
      setExperience((prevValue) => {
        if (prevValue >= 20) {
          clearInterval(intervalId);
          return 20;
        }
        return prevValue + 1;
      });
    }, 100);

    return () => clearInterval(intervalId);
   }
  }, [inView]);

  useEffect(() => {
    if(inView){
      const intervalId = setInterval(() => {
        setTrustedPartners((prevValue) => {
          if (prevValue >= 100) {
            clearInterval(intervalId);
            return 100;
          }
          return prevValue + 1;
        });
      }, 105);
  
      return () => clearInterval(intervalId);
    }
    
  }, [inView]);

  useEffect(() => {
    if(inView){
      const intervalId = setInterval(() => {
        setProducts((prevValue) => {
          if (prevValue >= 100) {
            clearInterval(intervalId);
            return 100;
          }
          return prevValue + 1;
        });
      }, 105);
  
      return () => clearInterval(intervalId);
    }
    
  }, [inView]);

  return (
    <Box ref={ref}>
      <Box mr={{ base: "-580px", lg: "0px" }}>
        <Heading
          color="#ff5722"
          textAlign={{ base: "center", lg: "center" }}
          fontSize="35px"
          fontFamily="poppins"
          mt='70px'
        >
          ACHIEVEMENTS
        </Heading>
      </Box>
      <Box
        ml={{ base: "500px", lg: "0px" }}
        display="flex"
        p="20px"
        justifyContent="space-around"
      >
      <Box>
      <Text color="#e8e4e4" fontSize="60px" textAlign='center' fontWeight='600'>
        {value}
      </Text>
      <Text extAlign="center" fontSize="20px" color='#c2c4c3'>
        Successful Projects
      </Text>
    </Box>

    <Box>
      <Text color="#e8e4e4" fontSize="60px" textAlign='center' fontWeight='600'>
        {trustedPartners}
      </Text>
      <Text extAlign="center" fontSize="20px" color='#c2c4c3'>
        Trusted Partners
      </Text>
    </Box>

    <Box>
      <Text color="#e8e4e4" fontSize="60px" textAlign='center' fontWeight='600'>
        {experience}
      </Text>
      <Text extAlign="center" fontSize="20px" color='#c2c4c3'>
        Years of Experience
      </Text>
    </Box>

    <Box>
    <Text color="#e8e4e4" fontSize="60px" margin='auto' textAlign='center' fontWeight='600'>
      {products}
    </Text>
    <Text textAlign="center" fontSize="20px" color='#c2c4c3'>
      Products
    </Text>
  </Box>
      </Box>
    </Box>
  );
}

export default Achievements;

