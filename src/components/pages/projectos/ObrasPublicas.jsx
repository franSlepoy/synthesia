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

const AdditionalImagesContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  background-image: url("/obrasPublicas/obras2.png");
  background-size: cover;
  background-position: center;

  padding: 20px;
`;
const AdditionalImagesContainer1 = styled(Box)`
  display: flex;
  justify-content: space-around;
  background-image: url("/obrasPublicas/obras9.png");
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

const ObrasPublicas = () => {
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
          src="/obrasPublicas/obras1.png"
          alt="imágen autopistas"
        />
      </Box>
      <Box
        sx={{ cursor: "pointer" }}
        position={"absolute"}
        top={"280px"}
        left={"35%"}
      >
        <ScrollLink to="seccionDestino" smooth={true}>
          <FloatingImage
            src="/obrasPublicas/obras.png"
            alt="Logo de Ministerio de Obras públicas"
          />
        </ScrollLink>
      </Box>

      <Box
        id="seccionDestino"
        pt={5}
        mt={-1}
        sx={{
          backgroundColor: "#03C3FF",
          display: "flex",
          width: "100%",
          height: "102px",
          justifyContent: "space-evenly",
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
            Cliente: <strong> Ministerio de Obras Públicas</strong>
          </Typography>
        </Box>
        <Box width={"720px"}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#FFFFFF",
            }}
          >
            Proyecto:{" "}
            <strong>
              {" "}
              Plan de Obras públicas para el Desarrollo de la Nación
            </strong>
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
            Año: <strong>2023</strong>
          </Typography>
        </Box>
      </Box>

      <AdditionalImagesContainer height={"720px"}>
        <Box mt={15}>
          <AnimatedImage
            width={"90%"}
            src="/obrasPublicas/obras3.png"
            alt="libro"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>

        <Box mt={15}>
          <AnimatedImage
            width={"90%"}
            src="/obrasPublicas/obras4.png"
            alt="libro"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>
        <Box mt={15}>
          <AnimatedImage
            width={"90%"}
            src="/obrasPublicas/obras5.png"
            alt="libro"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>
      </AdditionalImagesContainer>

      <Box display={"flex"} justifyContent={"space-evenly"} bgcolor={"white"}>
        <Box mt={5}>
          <FloatingImage
            src="/obrasPublicas/obras6.png"
            alt="imagen de bras públicas"
          />
        </Box>
        <Box mt={7}>
          <FloatingImage
            width={"96%"}
            src="/obrasPublicas/obras7.png"
            alt="imagen de bras públicas"
          />
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"} bgcolor={"white"}>
        <Box mt={2} pb={4}>
          <FloatingImage
            src="/obrasPublicas/obras8.png"
            alt="imagen de bras públicas"
          />
        </Box>
      </Box>
      <AdditionalImagesContainer1 height={"720px"}>
        <Box mt={15}>
          <AnimatedImage
            width={"90%"}
            src="/obrasPublicas/obras10.png"
            alt="libro"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>

        <Box mt={15}>
          <AnimatedImage
            width={"90%"}
            src="/obrasPublicas/obras11.png"
            alt="libro"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>
      </AdditionalImagesContainer1>
      <Box>
      <img width={"100%"} height={"932px"} src="/obrasPublicas/obras12.png" alt="" />
      </Box>
      <Box mt={-1}>
      <img width={"100%"} height={"932px"} src="/obrasPublicas/obras13.png" alt="" />
      </Box>
    </>
  );
};

export default ObrasPublicas;
