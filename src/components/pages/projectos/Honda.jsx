import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
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

const Honda = () => {
  return (
    <>
      <Box>
        <img
          height={"856px"}
          width={"100%"}
          src="honda/honda1.png"
          alt="foto de auto honda"
        />
      </Box>
      <Box sx={{cursor:"pointer"}} position={"absolute"} top={"140px"} left={"29%"}>
        <ScrollLink  to="seccionDestino" smooth={true}>
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
        <Box width={"380px"}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#FFFFFF",
            }}
          >
            Proyecto: <strong>Anuario institucional</strong>
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
            Año: <strong>2018</strong>
          </Typography>
        </Box>
      </Box>
      <Box>
        <img
          width={"100%"}
          height={"840px"}
          src="/honda/honda2.png"
          alt="auto en taller"
        />
      </Box>
      <Box
        sx={{
          zIndex: 10,
          p: 3,
          alignItems: "center",
          backgroundColor: "white",
        }}
        position={"absolute"}
        top={"1340px"}
        left={"32%"}
      >
        <FloatingImage src="/honda/honda3.png" alt="honda" />
      </Box>
      <Box
        sx={{ backgroundColor: "white" }}
        position={"absolute"}
        top={"1900px"}
        left={"2%"}
      >
        <FloatingImage src="/honda/honda4.png" alt="honda" />
      </Box>
      <Box position={"absolute"} top={"1980px"} left={"71%"}>
        <FloatingImage src="/honda/honda5.png" alt="honda" />
      </Box>
      <Box position={"absolute"} top={"2390px"} left={"4%"}>
        <FloatingImage src="/honda/honda6.png" alt="honda" />
      </Box>
      <Box position={"absolute"} top={"2280px"} left={"51%"}>
        <FloatingImage src="/honda/honda7.png" alt="honda" />
      </Box>

      <Box
        width={"100%"}
        sx={{
          position: "absolute",
          top: "2900px",
          bgcolor: "#CCC2C2",
          display: "flex",
          pb: 4,
        }}
      >
        <Box mt={8} ml={"14%"}>
          <Box>
            <FloatingImage src="/honda/honda8.png" alt="honda" />
          </Box>
          <Box>
            <FloatingImage src="/honda/honda10.png" alt="honda" />
          </Box>
        </Box>
        <Box mt={8} ml={"8%"}>
          <FloatingImage src="/honda/honda9.png" alt="honda" />

          <FloatingImage src="/honda/honda11.png" alt="honda" />
        </Box>
      </Box>
      <Box width={"100%"} position={"absolute"} top={"3730px"}>
        <img
          width={"100%"}
          height={"935px"}
          src="/honda/honda12.png"
          alt="local de honda"
        />
      </Box>
      <Box
        sx={{ backgroundColor: "white" }}
        position={"absolute"}
        top={"4750px"}
        left={"8%"}
      >
        <FloatingImage src="/honda/honda13.png" alt="honda" />
      </Box>
      <Box position={"absolute"} top={"4780px"} left={"51%"}>
        <FloatingImage src="/honda/honda14.png" alt="honda" />
      </Box>
      <Box position={"absolute"} top={"5200px"} left={"8%"}>
        <FloatingImage src="/honda/honda15.png" alt="honda" />
      </Box>
      <Box position={"absolute"} top={"5180px"} left={"65%"}>
        <FloatingImage src="/honda/honda16.png" alt="honda" />
      </Box>

      <Box position={"absolute"} top={"5700px"} left={"1%"}>
        <FloatingImage src="/honda/honda17.png" alt="honda" />
      </Box>
    </>
  );
};

export default Honda;
