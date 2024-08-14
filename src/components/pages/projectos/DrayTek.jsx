import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

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
  animation: floatAnimation 4s ease-in-out infinite;
`;

const floatAnimation1 = `
  @keyframes floatAnimation {
    0% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-3px) rotate(0.6deg); }
    35% { transform: translateY(-6px) rotate(0.8deg); }
    50% { transform: translateY(0) rotate(-0.4deg); }
    60% { transform: translateY(1) rotate(-0.10deg); }
    75% { transform: translateY(3px) rotate(0.27deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
`;
const FloatingImage1 = styled("img")`
  ${floatAnimation1}
  
  animation: floatAnimation 8s ease-in-out infinite;
`;

const ScrollableImageContainer = styled(Box)`
  position: absolute;

  /* top: 908px;
  left: 392px; */
  width: 660px;
  height: 398.5px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 7px;
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
  background-image: url("/honda1/honda1-19.png");
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

const DrayTek = () => {
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
      <Hidden lgDown>
        <Box>
          <img
            width={"100%"}
            style={{ objectFit: "cover" }}
            height={"696px"}
            src="drayTek/drayTek.png"
            alt="drayTek"
          />
        </Box>

        <Box
          position={"absolute"}
          top={"345px"}
          sx={{ left: "28%", transform: "translateX(-50%)" }}
        >
          <FloatingImage src="/drayTek/drayTek1.png" alt="drayTek" />
        </Box>
        <Box
          position={"absolute"}
          top={"345px"}
          sx={{ left: "68%", transform: "translateX(-50%)" }}
        >
          <FloatingImage1 src="/drayTek/drayTek16.png" alt="drayTek" />
        </Box>


        <Box
          position={"absolute"}
          top={"350px"}
          sx={{ left: "25%", transform: "translateX(-50%)" }}
        >
          <FloatingImage1 src="/drayTek/drayTek2.png" alt="honda" />
        </Box>

        <Box
          pt={5}
          mt={-1}
          sx={{
            backgroundColor: "#ED1C24",
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
              Cliente: <strong> Draytek</strong>
            </Typography>
          </Box>
          <Box width={"220px"}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "#FFFFFF",
              }}
            >
              Proyecto: <strong>Página web</strong>
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
              Año: <strong>2024</strong>
            </Typography>
          </Box>
        </Box>
        <Box height={"720px"}>
          <Box mt={4} textAlign={"center"}>
            <img
              style={{ objectFit: "cover" }}
              height={"620px"}
              src="/drayTek/drayTek3.png"
              alt="computadora"
            />
          </Box>
        </Box>
        <ScrollableImageContainer
          sx={{ top: "908px", left: "50.2%", transform: "translateX(-50%)" }}
        >
          <img width={"653px"} src="/drayTek/drayTek4.png" alt="" />
        </ScrollableImageContainer>

        <Box
          position={"absolute"}
          top={"900px"}
          sx={{ left: "80.2%", transform: "translateX(-50%)" }}
        >
          <FloatingImage1 src="/drayTek/drayTek5.png" alt="honda" />
        </Box>
        <Box
          position={"absolute"}
          top={"880px"}
          sx={{ left: "20.2%", transform: "translateX(-50%)" }}
        >
          <FloatingImage1 src="/drayTek/drayTek6.png" alt="honda" />
        </Box>
        <Box
          position={"absolute"}
          top={"1300px"}
          sx={{ left: "10.2%", transform: "translateX(-50%)" }}
        >
          <FloatingImage src="/drayTek/drayTek7.png" alt="" />
        </Box>

        <Box>
          <Box position={"absolute"} mt={25} zIndex={10}>
            <img width={"830px"} src="/drayTek/drayTek9.png" alt="compuradora" />
          </Box>
          <Box
            position={"absolute"}
            mt={5}
            zIndex={0}
            top={"1500px"}
            sx={{ left: "63%", transform: "translateX(-50%)" }}
          >
            <img width={"823px"} src="/drayTek/drayTek8.png" alt="pagina detalle de producto" />
          </Box>
        </Box>
        <Box ml={22}>
          <FloatingImage src="/drayTek/drayTek10.png" alt="drayTek" />
        </Box>

        <Box
          width={"100%"}
          height={"845px"}
          mt={125}
          sx={{
            background: "linear-gradient(225deg, #738DE5 0%, #202B61 100%)",
          }}
        >
          <Box
            position={"absolute"}
            zIndex={1200}
            pt={14}
            sx={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <img
              height={"620px"}
              src="/drayTek/drayTek3.png"
              alt="computadora"
            />
          </Box>
        </Box>
        <Box position={"absolute"} zIndex={100} top={"3200px"}  sx={{ left: "10%", transform: "translateX(-50%)" }}>
          <FloatingImage1 src="drayTek/drayTek12.png" alt="12" />
        </Box>
        <Box position={"absolute"} zIndex={100} top={"2800px"}  sx={{ left: "10%", transform: "translateX(-50%)" }}>
          <FloatingImage src="drayTek/drayTek13.png" alt="13" />
        </Box>
        <Box position={"absolute"} zIndex={100} top={"2700px"}  sx={{ left: "60%", transform: "translateX(-50%)" }}>
          <FloatingImage1 src="drayTek/drayTek14.png" alt="14" />
        </Box>
        <Box position={"absolute"} zIndex={100} top={"2900px"}  sx={{ left: "90%", transform: "translateX(-50%)" }}>
          <FloatingImage src="drayTek/drayTek15.png" alt="15" />
        </Box>
      </Hidden>
    </>
  );
};

export default DrayTek;
