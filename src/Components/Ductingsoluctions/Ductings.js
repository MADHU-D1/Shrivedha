import { Link } from "react-router-dom";
  import { Heading,Box,Button,Text, Image, Center } from "@chakra-ui/react";
  import { useState } from "react";
  //import "./styles.css";
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      //behavior: "smooth", // Add smooth scrolling effect
    });
  };


  const content = [
    [
     <Link  to="/rectangular" onClick={scrollToTop}> <Image w="560px" h="420px" src="/rectangle.png" alt="rectangle" /></Link>
    ],
    [
      <Link to="/spiralflatovalduct" onClick={scrollToTop}><Image w="560px" h="420px" src="/spiralflat.png" alt="spiralflat" /></Link>
     ],
    
     [
       <Link to="/spiralroundduct" onClick={scrollToTop}><Image w="560px" h="420px" src="/spiralround.png" alt="spiralround" /></Link>
     ],

     [
      <Link to="/msflangeduct" onClick={scrollToTop}><Image w="560px" h="420px" src="/Msflange.png" alt="Msflange" /></Link>
     ],

     [
      <Link to="/sliponflangeduct" onClick={scrollToTop}><Image w="560px" h="420px" src="/slipon.png" alt="slipon" /></Link>
     ],

     [
      <Link to="/roundtoaquareduct" onClick={scrollToTop}><Image  w="560px" h="420px" src="/round.png" alt="round" /></Link>
     ],

     [
      <Link to="/ovalvcd" onClick={scrollToTop}><Image w="560px" h="420px" src="/ovalvcd.png" alt="ovalvcd" /></Link>
     ],

     [
      <Link to="/lpplenumterminalbox" onClick={scrollToTop}> <Image w="560px" h="420px" src="/plenum.png" alt="plenum" /></Link>
     ],

  ];

  export default function Ductinds() {
    const [activeContentIndex, setActiveContentIndex] = useState(0);
    //const [hoveredImage, setHoveredImage] = useState(null);

    

    return (
      <Box mt={{base:'20px', lg:'-30px'}} >
      
      <Box  mt="40px" w={{base:"1110px",lg:"100%", sm:'100%', md:'70%'}}>
      <Center>
      <Box mt="30px" mb='-10px' color='#b7b2bf' fontSize="30px" fontWeight={600}>
        <Text>Complete Ducting Solutions</Text>
      </Box>
      </Center>
        <Box   display={{base:"flex", lg:"flex", sm:'flex', md:'flex'}}  justifyContent="space-around" alignItems="center"  p="40px">
          <Box display={{base:'flex',lg:'flex', sm:'flex', lg:'flex'}} flexDir={{base:'column',lg:'column', sm:'column', md:'column'}} alignItems='flex-start'>
            <Button
            style={activeContentIndex === 0 ? { background: "#ff5c23",color:"white" } : {}}
              onClick={() => setActiveContentIndex(0) } w={{base:"100%", lg:"100%", sm:'100%', md:'100%'}} m="10px"
              
            >
            Rectangular Duct
            </Button>
            <Button
            style={activeContentIndex === 1 ? { background: "#ff5c23",color:"white" } : {}}
              onClick={() => setActiveContentIndex(1)} w="100%" m="10px"
              
            >
            Spiral Flat Oval Duct

            </Button>
            <Button
            style={activeContentIndex === 2 ? { background: "#ff5c23",color:"white" } : {}}
              onClick={() => setActiveContentIndex(2)} w="100%" m="10px"
            >
            Spiral Round Duct
            </Button>
            <Button
            style={activeContentIndex === 3 ? { background: "#ff5c23",color:"white" } : {}}
              onClick={() => setActiveContentIndex(3)} w="100%" m="10px"
            >
            Ms-Flanga Duct
            </Button>
            <Button
              style={activeContentIndex === 4 ? { background: "#ff5c23",color:"white" } : {}}
              onClick={() => setActiveContentIndex(4)} w="100%" m="10px"
            >
            Slip on Flanga Duct

            </Button>
            <Button
              style={activeContentIndex === 5 ? { background: "#ff5c23",color:"white" } : {}}
              onClick={() => setActiveContentIndex(5)} w="100%" m="10px"
            >
            Round to Square Duct
            </Button>
            <Button
              style={activeContentIndex === 6 ? { background: "#ff5c23",color:"white" } : {}}
              onClick={() => setActiveContentIndex(6)} w="100%" m="10px"
            >
            Oval VCD

            </Button>
            <Button
               style={activeContentIndex === 7 ? { background: "#ff5c23",color:"white" } : {}}
              onClick={() => setActiveContentIndex(7)} w="100%" m="10px"
            >
            Lp Plenum/Terminal Box

            </Button>
          </Box>
          
          <Box mt="10px"  display={{base:'flex',lg:'flex'}} justifyContent={{base:'column',lg:'row'}}>
            <ul>
              {content[activeContentIndex].map((item) => (
                <Box  key={item}>{item}</Box>
              ))}
            </ul>
          </Box>
        </Box>
        </Box>
      </Box>
    );
  }






  