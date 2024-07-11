import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const floatAnimation = `
  @keyframes floatAnimation {
    0% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-5px) rotate(0.5deg); }
    50% { transform: translateY(0) rotate(-0.5deg); }
    75% { transform: translateY(5px) rotate(0.25deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
`;

const FloatingImage = styled("img")`
  ${floatAnimation}
  animation: floatAnimation 3s ease-in-out infinite;
`;

const ScrollableImageContainer = styled(Box)`
  position: absolute;
  top: 1106px;
  left: 18%;
  width: 65%;
  height: 580px; // Adjust height as needed
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  // Custom scrollbar styles
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const AdditionalImagesContainer = styled(Box)`
display: flex;
justify-content: space-around;
background-image: url('/honda1/honda1-19.png');
background-size: cover;
background-position: center;
padding: 20px;
`;

const AnimatedImage = styled("img")`
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  &.hidden {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const Honda1 = () => {
  const [showAdditionalImages, setShowAdditionalImages] = useState(false);
  const [showFinalImages, setShowFinalImages] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFinalImages((prev) => !prev);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box>
        <img
          height={"856px"}
          width={"100%"}
          src="/honda1/honda1-1.png"
          alt="taller de Honda"
        />
      </Box>
      <Box
        sx={{ cursor: "pointer" }}
        position={"absolute"}
        top={"140px"}
        left={"29%"}
      >
        <ScrollLink to="seccionDestino" smooth={true}>
          <FloatingImage src="/honda/honda.png" alt="honda" />
        </ScrollLink>
      </Box>

      <Box
        id="seccionDestino"
        pt={5}
        mt={-1}
        sx={{
          backgroundColor: "#E11F27",
          display: "flex",
          width: "100%",
          height: "102px",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#FFFFFF",
            }}
          >
            Cliente: <strong>Honda Argentina</strong>
          </Typography>
        </Box>
        <Box width={"420px"}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#FFFFFF",
            }}
          >
            Proyecto: <strong>Programa de comunicación interna</strong>
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#FFFFFF",
            }}
          >
            Año: <strong>2017 - 2020</strong>
          </Typography>
        </Box>
      </Box>
      <Box width={"100%"}>
        <img
          height={"1000px"}
          width={"100%"}
          src="/honda1/honda1-2.png"
          alt="computadora"
        />
      </Box>
      <ScrollableImageContainer>
        <img width={"100%"} src="/honda1/honda1-3.png" alt="" />
      </ScrollableImageContainer>

      <Box mt={-1} display={"flex"} bgcolor={"#F0F0F0"}>
        <Box mt={10} ml={10}>
          <FloatingImage src="/honda1/honda1-4.png" alt="honda" />
        </Box>
        <Box mt={2} ml={8}>
          <FloatingImage src="/honda1/honda1-5.png" alt="honda" />
        </Box>
        <Box mt={10} ml={8}>
          <FloatingImage src="/honda1/honda1-6.png" alt="honda" />
        </Box>
      </Box>
      <Box display={"flex"} bgcolor={"#F0F0F0"}>
        <Box mt={18} ml={20}>
          <FloatingImage src="/honda1/honda1-7.png" alt="honda" />
        </Box>
        <Box mt={10} ml={20}>
          <FloatingImage src="/honda1/honda1-8.png" alt="honda" />
        </Box>
      </Box>
      <Box mt={-12}>
        <img
          width={"100%"}
          height={"936px"}
          src="/honda1/honda1-9.png"
          alt="taller de honda"
        />
      </Box>

      <Box
        onMouseEnter={() => setShowAdditionalImages(true)}
        onMouseLeave={() => setShowAdditionalImages(false)}
        position={"absolute"}
        top={"3400px"} // Ajusta la posición según sea necesario
        left={"76%"} // Ajusta la posición según sea necesario
        sx={{ cursor: "pointer" }}
      >
        <FloatingImage src="/honda1/honda1-10.png" alt="honda" />
      </Box>

      {showAdditionalImages && (
        <>
          <Box position={"absolute"} top={"3400px"} left={"6%"}>
            <FloatingImage
              width={"80%"}
              src="/honda1/honda1-11.png"
              alt="honda"
            />
          </Box>
          <Box position={"absolute"} top={"3350px"} left={"40%"}>
            <FloatingImage
              width={"80%"}
              src="/honda1/honda1-12.png"
              alt="honda"
            />
          </Box>
          <Box position={"absolute"} top={"3700px"} left={"74%"}>
            <FloatingImage src="/honda1/honda1-13.png" alt="honda" />
          </Box>
          <Box position={"absolute"} top={"3780px"} left={"20%"}>
            <FloatingImage
              width={"80%"}
              src="/honda1/honda1-14.png"
              alt="honda"
            />
          </Box>
          <Box position={"absolute"} top={"3880px"} left={"54%"}>
            <FloatingImage
              width={"80%"}
              src="/honda1/honda1-15.png"
              alt="honda"
            />
          </Box>
        </>
      )}
       

       <Box >

       </Box>
      
      <AdditionalImagesContainer m={5}>
        
        <Box>
          <AnimatedImage
            src="/honda1/honda1-16.png"
            alt="propaganda de honda"
            className={showFinalImages ? "visible" : "hidden"}
          />
          
        </Box>
        <Box>
          <AnimatedImage
            src="/honda1/honda1-17.png"
            alt="propaganda de honda"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>
        <Box>
          <AnimatedImage
            src="/honda1/honda1-18.png"
            alt="propaganda de honda"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>
      </AdditionalImagesContainer>

     
    </>
  );
};

export default Honda1;
