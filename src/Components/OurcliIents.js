


import { Box, Heading, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurClients() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Box
      mt={{ base: "300px", lg: "20px" }}
      mb={{ base: "20px", lg: "60px" }}
      justifyItems={{ base: "center", lg: "center" }}
      alignItems="center"
    >
      <Box>
        <Heading
          fontFamily="poppins"
          textAlign="center"
          fontSize={{ base: "30px", lg: "35px" }}
          mt='60px'
         // mb={{ base: "10px", lg: "30px" }}
          color="#ff5c23"
        >
          OUR CLIENTS
        </Heading>
      </Box>
      <Box
        flexDir={{ base: "row", lg: "row" }}
        // alignItems={{ base: "center", lg: "center" }}
        // justifyContent={{ base: "center", lg: "center" }}
        p={{ base: "40px", lg: "43px" }}
        pt={{ base: "18px", lg: "20px" }}
        pb={{ lg: "px", lg: "10px" }}
        w={{ base: "1090px", lg: "1410px" }}
        h={{ base: "112px", lg: "250px" }}
        m="20px"
        bg="#C3D7CD"
       
        borderRadius="20px"
        
      >
        <Slider {...settings}>
          <Image
            src="cpwd.png"
            alt="cpwd.png"
            maxW={{ base: "100px", lg: "300px" }}
            height="auto"
            //ml={{base:"20px", lg:"200px"}}
            pt={{base:"5px", lg:"25px"}}
            p="5px"
          />
          <Image
            src="eil.png"
            alt="eil.png"
            maxW={{ base: "150px", lg: "1000px" }}
            mt={{ base: "-10px", lg: "-20px" }}
            height="auto"
            ml={{base:"0px", lg:"-100px"}}
          />
          <Image
            src="nbcc.png"
            alt="nbcc.png"
            maxW={{ base: "100px", lg: "200px" }}
            mt={{ base: "0px", lg: "25px" }}
            height="auto"
          />
          <Image
            src="rites.png"
            alt="rites.png"
            maxW={{ base: "100px", lg: "300px" }}
            mt={{ base: "20px", lg: "25px" }}
            height="auto"
           // ml={{base:"20px", lg:"-100px"}}
          />   
        </Slider>
      </Box>
    </Box>
  );
}

export default OurClients;












