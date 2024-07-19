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
  background-image: url("/imb/imb4.png");
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

const Imb = () => {
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
        <img height={"856px"} width={"100%"} src="/imb/imb1.png" alt="" />
      </Box>
      <Box
        sx={{ cursor: "pointer" }}
        position={"absolute"}
        top={"330px"}
        left={"24%"}
      >
        <ScrollLink to="seccionDestino" smooth={true}>
          <FloatingImage src="/imb/imb.png" alt="honda" />
        </ScrollLink>
      </Box>

      <Box
        id="seccionDestino"
        pt={5}
        mt={-1}
        sx={{
          backgroundColor: "#5AA250",
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
            Cliente: <strong>IMB</strong>
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
            <a
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
              href="http://www.imb.com.ar/index.html"
            >
              {" "}
              Proyecto: <strong>Página web</strong>
            </a>
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
            Año: <strong>2015</strong>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: "url('/imb/imb2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        width={"100%"}
      >
        <img
          height={"1000px"}
          width={"100%"}
          src="/imb/imb3.png"
          alt="computadora"
        />
      </Box>
      
      <ScrollableImageContainer>
        <img width={"100%"} src="/honda1/honda1-3.png" alt="" />
      </ScrollableImageContainer>

      <AdditionalImagesContainer m={5}>
        <Box>
          <AnimatedImage
            width={"95%"}
            src="/imb/imb5.png"
            alt="sección de pagina web"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>
        <Box>
          <AnimatedImage
             width={"80%"}
             src="/imb/imb6.png"
             alt="sección de pagina web"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>
       
      </AdditionalImagesContainer>
    </>
  );
};

export default Imb;
