import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const ScrollableImageContainer = styled(Box)`
  position: absolute;
  top: 1074px;
  left: 382px;
  width: 686px;
  height: 418px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 10px;
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

const ScrollableImageContainer1 = styled(Box)`
  position: absolute;
  top: 1862px;
  left: 564px;
  width: 336px;
  height: 630px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 10px;
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
const FadingImage = styled(Box)`
  transition: opacity 0.5s ease-in-out;
`;

const FadingImage1 = styled(Box)`
  transition: opacity 0.5s ease-in-out;
`;

const FadingImage2 = styled(Box)`
  position: absolute;
  transition: opacity 0.5s ease-in-out;
`;

const FadingImage3 = styled(Box)`
  transition: opacity 0.5s ease-in-out;
`;
const FadingImage4 = styled(Box)`
  position: absolute;
  transition: opacity 0.5s ease-in-out;
`;

const Franca = () => {
  const [imageIndices, setImageIndices] = useState([0, 0, 0]);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const imageSets = [
    [
      { src: "psa/psa3.png", bgColor: "#F04F50" },
      { src: "psa/psa4.png", bgColor: "#E9E8E3" },
      { src: "psa/psa5.png", bgColor: "white" },
    ],
    [
      { src: "psa/psa6.png", bgColor: "#E9E8E3" },
      { src: "psa/psa7.png", bgColor: "#F04F50" },
      { src: "psa/psa8.png", bgColor: "#2F5183" },
    ],
  ];

  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setImageIndices((prev) => [
          (prev[0] + 1) % imageSets.length,
          prev[1],
          prev[2],
        ]);
      }, 4000),
      setInterval(() => {
        setImageIndices((prev) => [
          prev[0],
          (prev[1] + 1) % imageSets.length,
          prev[2],
        ]);
      }, 4500),
      setInterval(() => {
        setImageIndices((prev) => [
          prev[0],
          prev[1],
          (prev[2] + 1) % imageSets.length,
        ]);
      }, 5000),
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hidden lgDown>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"696px"}
            width={"100%"}
            src="franca/franca.png"
            alt="Sillón Franca"
          />
        </Box>

        <Box
          pt={5}
          mt={-1}
          sx={{
            backgroundColor: "#EBD2B4",
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
              Cliente: <strong>Franca</strong>
            </Typography>
          </Box>
          <Box width={"400px"}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "black",
              }}
            >
              Proyecto: <strong>Web app e-commerce</strong>
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
            height={"1840px"}
            width={"100%"}
            src="franca/franca1.png"
            alt="fondo de con imágen de sillon"
          />
        </Box>

        <Box position={"absolute"} top={"942px"} left={"208px"}>
          <img src="franca/franca2.png" alt="computadora" />
        </Box>

        <ScrollableImageContainer>
          <img
            width={"676px"}
            style={{ objectFit: "cover" }}
            src="/franca/franca9.png"
            alt="imágen de home de pagina"
          />
        </ScrollableImageContainer>

        <Box position={"absolute"} top={"1752px"} left={"22px"}>
          <img
            src="franca/franca3.png"
            alt="celulares con imágeneás de la web mobile"
          />
        </Box>

        <ScrollableImageContainer1>
          <img
            width={"326px"}
            style={{ objectFit: "cover" }}
            src="/franca/franca8.png"
            alt="web mobile"
          />
        </ScrollableImageContainer1>

        <Box
          mt={-1}
          width={"100%"}
          height={"752px"}
          sx={{
            background: "linear-gradient(225deg, #528E87 0%, #172826 100%)",
          }}
        >
          <FadingImage
            sx={{ ml: "8%", pt: "115px", opacity: showSecondImage ? 0 : 1 }}
          >
            <img src="/franca/franca4.png" alt="PSA revista" />
          </FadingImage>
          <FadingImage
            sx={{ ml: "8%", mt: "-515px", opacity: showSecondImage ? 1 : 0 }}
          >
            <img src="/franca/franca5.png" alt="PSA revista" />
          </FadingImage>
        </Box>

        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"844px"}
            width={"100%"}
            src="/franca/franca6.png"
            alt=""
          />
        </Box>
        <Box ml={"18%"} mt={"-708px"}>
          <img
            style={{ objectFit: "cover" }}
            src="/franca/franca7.png"
            alt=""
          />
        </Box>
        
      </Hidden>
    </>
  );
};

export default Franca;
