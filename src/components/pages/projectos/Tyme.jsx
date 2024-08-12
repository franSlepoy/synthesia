import { Box, Hidden, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";

/* const typing = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const blinkCaret = keyframes`
  0% { border-right-color: black; }
  50% { border-right-color: transparent; }
  100% { border-right-color: black; }
`;

const AnimatedText = styled(Box)`
  display: inline-block;
  overflow: hidden;
  border-right: 0px solid black;
  white-space: nowrap;
  animation: ${typing} 4s steps(30, end), ${blinkCaret} 0.5s step-end infinite;
`;

const AnimatedTextContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  background-color: "#1296E9";
  width: 100%;
  height: 102px;
`;
 */
const ScrollableImageContainer = styled(Box)`
  position: absolute;
  top: 1062px;
  left: 50.1%;
  transform: translateX(-50%);
  /*  left: 382px;  */
  /*  left: 26.5%;  */
  width: 684px;
  height: 418px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #dbd9d9;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #969393;
  }
`;

const Tyme = () => {
  return (
    <>
      <Hidden lgDown>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"696px"}
            width={"100%"}
            src="tyme/tyme.png"
            alt="Portada de tyme"
          />
        </Box>

        {/*   <AnimatedTextContainer bgcolor={"#1296E9"} pt={5} mt={-1}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "black",
              }}
            >
              <AnimatedText>
                Cliente: <strong>Tyme</strong>
              </AnimatedText>
            </Typography>
          </Box>
          <Box ml={8} width={"300px"}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "black",
              }}
            >
              <AnimatedText>
                <a
                  target="_blank"
                  style={{ color: "black", textDecoration: "none" }}
                  href="https://www.tyme-consulting.com/"
                >
                  Proyecto: <strong>Sitio Web</strong>
                </a>
              </AnimatedText>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "black",
              }}
            >
              <AnimatedText>
                Año: <strong>2024</strong>
              </AnimatedText>
            </Typography>
          </Box>
        </AnimatedTextContainer> */}
        <Box
          pt={5}
          mt={-1}
          sx={{
            backgroundColor: "#1296E9",
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
                color: "black",
              }}
            >
              Cliente: <strong>Tyme </strong>
            </Typography>
          </Box>
          <Box ml={8} width={"300px"}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "black",
              }}
            >
              <a
                target="_blank"
                style={{ color: "black", textDecoration: "none" }}
                href="https://www.tyme-consulting.com/"
              >
                Proyecto: <strong>Sitio Web</strong>
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
                color: "black",
              }}
            >
              Año: <strong>2024</strong>
            </Typography>
          </Box>
        </Box>

        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"943px"}
            width={"100%"}
            src="tyme/tyme1.png"
            alt="tyme, imagen de fondo"
          />
        </Box>

        <Box
          position={"absolute"}
          top={"942px"}
          sx={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img src="tyme/tyme2.png" alt="computadora" />
        </Box>

        <ScrollableImageContainer>
          <img
            width={"677px"}
            style={{ objectFit: "cover" }}
            src="tyme/tyme3.png"
            alt="imagen de home de pagina"
          />
        </ScrollableImageContainer>

        <Box mt={-1}>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            height={"963px"}
            src="tyme/tyme4.png"
            alt="celu fondo"
          />
        </Box>
        <Box
          position={"absolute"}
          top={"1790px"}
          sx={{ left: "28.6%", transform: "translateX(-50%)" }}
        >
          <img width={"890px"} height={"818px"} src="tyme/tyme5.png" alt="celu" />
        </Box>
        <Box
          position={"absolute"}
          top={"1859px"}
          sx={{ left: "28%", transform: "translateX(-50%)" }}
        >
          <video
            muted
            autoPlay
            loop
            style={{ objectFit: "cover", borderRadius: "48px" }}
            src="tyme/tymeMobile.mov"
          />
        </Box>
        <Box mt={-1} width={"100%"} height={"820px"} bgcolor={"#A0D5F6"}>
          <Box textAlign={"center"} pt={8}>
            <img src="tyme/tyme2.png" alt="computadora" />
          </Box>
        </Box>
        <Box
          position={"absolute"}
          top={"2869px"}
          sx={{ left: "50.2%", transform: "translateX(-50%)" }}
        >
          <video
            muted
            preload="auto"
            autoPlay
            loop
            style={{ objectFit: "cover" }}
            width={"688px"}
            height={"420px"}
            src="tyme/tymeEscritorio.mov"
          />
        </Box>
      </Hidden>
    </>
  );
};

export default Tyme;
