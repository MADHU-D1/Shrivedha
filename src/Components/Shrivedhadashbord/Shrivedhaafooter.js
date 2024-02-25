import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { AtSignIcon } from "@chakra-ui/icons";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { Heading, Text, Box, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Shrivedhaafooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      //behavior: "smooth", // Add smooth scrolling effect
    });
  };
  return (
    <Box
      bg="#334155"
      mt={{ base: "0px", lg: "0px" }}
      p={{ base: "0px", lg: "10px" }}
      flexDirection={{ base: "row", lg: "row" }}
      w={{ base: "1130px", lg: "100%" }}
      h={{ base: "none", lg: "100%" }}
    >
      <Box
        display={{ base: "flex", lg: "flex" }}
        borderBottom="2px solid white"
        m="30px"
      >
        <Box
          borderRight={{ base: "2px solid #fff", lg: "2px solid #fff" }}
          m={{ base: "30px", lg: "30px" }}
          pr={{ base: "10px", lg: "40px" }}
        >
          <Box ml={{ base: "0px", lg: "10px" }}>
            <Heading mb="10px" fontFamily="poppins" color="#fff">
              SHRIVEDAA
            </Heading>
            <Box color="#fff">
              <Text>Shrivedaa Engineering Technologies</Text>
              <Text>Plot No: 85, phase-III, IDA, Jeedimetla</Text>
              <Text>Quthbullapur Mandal, Medchal, Malkajgiri</Text>
              <Text>Telangana-500055</Text>
            </Box>
          </Box>
          <Box mt="2px" ml={{ base: "0px", lg: "10px" }}>
            <Icon mr="-10px" h="80px" w="60px" color="#fff">
              <AiFillInstagram />
            </Icon>
            <Icon mr="-10px" h="80px" w="60px" color="#fff">
              <AiFillLinkedin />
            </Icon>
            <Icon h="80px" w="60px" color="#fff">
              <FaFacebook />
            </Icon>
          </Box>
        </Box>

        <Box>
          <Box
            display={{ base: "flex", lg: "flex" }}
            flexDir={{ base: "row", lg: "row" }}
            pb="60px"
          >
            <Box ml={{ base: "10px", lg: "20px" }}>
              <Heading
              fontSize="17px"
              color="#FFFFFF"
                mt="40px"
                fontFamily="poppins"
              >
                Quick Links
              </Heading>
              <Box color="#fff" pt="15px" lineHeight="8">
                <Link to="/" onClick={scrollToTop}>
                  <Text>Home</Text>
                </Link>
                <Link to="/aboutus" onClick={scrollToTop}>
                
                  <Text>About Us</Text>
                </Link>
                <Link to="/projects" onClick={scrollToTop}>
                  <Text>Projects</Text>
                </Link>
                <Link to="/products" onClick={scrollToTop}>
                  <Text>Products</Text>
                </Link>
                <Link to="/contactus" onClick={scrollToTop}>
                  <Text>Contact Us</Text>
                </Link>
              </Box>
            </Box>
            <Box ml={{ base: "55", lg: "130px" }}>
              <Heading
                fontSize="17px"
                color="#FFFFFF"
                mt="40px"
                fontFamily="poppins"
              >
                
              PRODUCTS
              </Heading>
              <Box color="#fff" pt="15px" lineHeight="8">
                <Link to="/rectangular" onClick={scrollToTop}>
                  <Text>Rectangular</Text>
                </Link>
                <Link to="/spiralflatovalduct" onClick={scrollToTop}>
                
                  <Text>Spiralflat ovalduct</Text>
                </Link>
                <Link to="/spiralroundduct" onClick={scrollToTop}>
                  <Text>Spiral roundduct</Text>
                </Link>
                <Link to="/msflangeduct" onClick={scrollToTop}>
                  <Text>Msflangeduct</Text>
                </Link>
                <Link to="/sliponflangeduct" onClick={scrollToTop}>
                  <Text>Sliponflangeduct</Text>
                </Link>
                <Link to="/roundtoaquareduct" onClick={scrollToTop}>
                  <Text>Roundto squareduct</Text>
                </Link>
                <Link to="/ovalvcd" onClick={scrollToTop}>
                  <Text>Ovalvcd</Text>
                </Link>
                <Link to="/lpplenumterminalbox" onClick={scrollToTop}>
                  <Text>Lpplenum/Terminalbox</Text>
                </Link>
              </Box>
            </Box>

            <Box ml={{ base: "40px", lg: "120px" }}>
              <Heading
                fontSize={{ base: "20px", lg: "17px" }}
                
                color="#FFFFFF"
                fontFamily="poppins"
                mt="40px"
              >
                Contact Details
              </Heading>
              <Box color="#fff" pt="15px">
                <Box display="flex" flexDir="row">
                  <Box>
                    <Icon mr="-10px" h="40px" w="30px" color="#fff">
                      <BsFillEnvelopeOpenFill />
                    </Icon>
                    <Box>
                      <Icon mr="-10px" h="40px" w="40px" color="#fff">
                        <AiFillPhone />
                      </Icon>
                    </Box>
                  </Box>
                  <Box>
                    <Text fontSize="18px">sales@shrivedaa.com</Text>

                    <Text  fontSize="18px" pt="10px">
                     8899776608
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box textAlign="center" mt="20px">
        <Text color="#fff">
          <Icon mr="8px">
            <AtSignIcon />
          </Icon>
          2023 Shrivedaa
          <Icon fontSize="23px" mr="8px" ml="8px">
            <MdCopyright />
          </Icon>
          All rights Reserved
        </Text>
      </Box>
    </Box>
  );
}
export default Shrivedhaafooter;

