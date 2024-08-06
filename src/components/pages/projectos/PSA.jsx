import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const ScrollableImageContainer = styled(Box)`
  position: absolute;
  top: 1096px;
  left: 254px;
  width: 406px;
  height: 245px;
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
  top: 7954px;
  left: 254px;
  width: 406px;
  height: 245px;
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
  position: absolute;
  top: 2520px;
  left: 47%;
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
const FadingImage5 = styled(Box)`
  position: absolute;
  transition: opacity 0.5s ease-in-out;
`;
const FadingImage6 = styled(Box)`
  position: absolute;
  transition: opacity 0.5s ease-in-out;
`;

const PSA = () => {
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
      <Hidden >
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"696px"}
            width={"100%"}
            src="psa/psa.png"
            alt="portada de PSA"
          />
        </Box>

        <Box
          pt={5}
          mt={-1}
          sx={{
            backgroundColor: "#2F5183",
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
              Cliente: <strong>PSA Peugeot Citroën</strong>
            </Typography>
          </Box>
          <Box width={"400px"}>
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
              Año: <strong>2010 - 2020</strong>
            </Typography>
          </Box>
        </Box>

        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"856px"}
            width={"100%"}
            src="/psa/psa1.png"
            alt="foto de auto"
          />
        </Box>
        <Box position={"absolute"} top={"1042px"} left={"172px"}>
          <img src="psa/psa37.png" alt="computadora" />
        </Box>

        <ScrollableImageContainer>
          <img
            width={"396px"}
            height={"573px"}
            style={{ objectFit: "cover" }}
            src="/psa/psa2.png"
            alt="diseño de comunicación"
          />
        </ScrollableImageContainer>

        <Box height={"800px"} display={"flex"} mt={-1}>
          {[0, 1, 2].map((index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                pt: 8,
                pb: 8,
                width: "33.3%",
                bgcolor: imageSets[imageIndices[index]][index].bgColor,
              }}
            >
              <img src={imageSets[imageIndices[index]][index].src} alt="carrusel de imágenes" />
            </Box>
          ))}
        </Box>

        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"782px"}
            width={"100%"}
            src="/psa/psa9.png"
            alt="PSA revista"
          />
        </Box>
        <FadingImage sx={{ opacity: showSecondImage ? 0 : 1 }}>
          <img src="/psa/psa10.png" alt="PSA revista" />
        </FadingImage>
        <FadingImage sx={{ opacity: showSecondImage ? 1 : 0 }}>
          <img src="/psa/psa11.png" alt="PSA revista" />
        </FadingImage>

        <Box mt={-1}>
          <img
            style={{ objectFit: "cover" }}
            height={"856px"}
            width={"100%"}
            src="/psa/psa12.png"
            alt="públicidad de seguridad vial"
          />
        </Box>

        <Box width={"100%"} display={"flex"} height={"782px"}>
          <Box width={"50%"} height={"782px"}>
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"782px"}
              src="/psa/psa13.png"
              alt="compu"
            />
          </Box>
          <Box width={"50%"} height={"782px"} /* bgcolor={"#92D9F9"} */>
            <FadingImage1
              sx={{
                position: "absolute",
                top: "4084px",
                opacity: showSecondImage ? 0 : 1,
              }}
            >
              <img
                width={"100%"}
                style={{ objectFit: "cover" }}
                height={"782px"}
                src="/psa/psa14.png"
                alt="seguridad vial amarillo"
              />
            </FadingImage1>
            <FadingImage1
              sx={{
                position: "absolute",
                top: "4084px",
                opacity: showSecondImage ? 1 : 0,
              }}
            >
              <img
                width={"100%"}
               
                height={"782px"}
                src="/psa/psa15.png"
                alt="seguridad vial celeste"
              />
            </FadingImage1>
          </Box>
        </Box>

        <Box position="relative" height="782px">
          <FadingImage2
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "0",
              left: 0,
              right: 0,
            }}
          >
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"782px"}
              src="/psa/psa16.png"
              alt=""
            />
          </FadingImage2>
          <FadingImage2
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "0",
              left: 0,
              right: 0,
            }}
          >
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"782px"}
              src="/psa/psa17.png"
              alt=""
            />
          </FadingImage2>
        </Box>

        <Box position={"absolute"} top={"5040px"} left={"22%"}>
          <img src="/psa/psa18.png" alt="" />
        </Box>

        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            bgcolor={"#E9E8E3"}
            pt={8}
            pb={6}
          >
            <Box>
              <img src="/psa/psa19.png" alt="" />
            </Box>
            <Box>
              <img src="/psa/psa20.png" alt="" />
            </Box>
          </Box>
        </Box>

        <Box display={"flex"}>
          <Box width={"50%"}>
            <Box position="relative" mt={12} ml="18%">
              <FadingImage3
                sx={{
                  opacity: currentImage === 0 ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <img src="/psa/psa22.png" alt="" />
              </FadingImage3>
              <FadingImage3
                sx={{
                  opacity: currentImage === 1 ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <img src="/psa/psa23.png" alt="" />
              </FadingImage3>
              <FadingImage3
                sx={{
                  opacity: currentImage === 2 ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <img src="/psa/psa24.png" alt="" />
              </FadingImage3>
            </Box>
          </Box>
          <Box width={"50%"}>
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"782px"}
              src="psa/psa21.png"
              alt=""
            />
          </Box>
        </Box>

        <Box mt={-1}>
          <img
            style={{ objectFit: "cover" }}
            height={"856px"}
            width={"100%"}
            src="/psa/psa1.png"
            alt=""
          />
        </Box>
        <Box position={"absolute"} top={"7902px"} left={"172px"}>
          <img src="psa/psa37.png" alt="" />
        </Box>

        <ScrollableImageContainer1>
          <img
            width={"396px"}
            height={"574px"}
            style={{ objectFit: "cover" }}
            src="/psa/psa26.png"
            alt=""
          />
        </ScrollableImageContainer1>

        <Box mt={-1}>
          <img
            style={{ objectFit: "cover" }}
            height={"782px"}
            width={"100%"}
            src="psa/psa27.png"
            alt="foto de auto honda"
          />
        </Box>

        <Box mt={-4} position="relative" height="782px">
          <FadingImage4
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "0",
              left: 0,
              right: 0,
            }}
          >
            <img
              style={{ objectFit: "cover" }}
              height={"782px"}
              width={"100%"}
              src="/psa/psa29.png"
              alt=""
            />
          </FadingImage4>
          <FadingImage4
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "0",
              left: 0,
              right: 0,
            }}
          >
            <img
              style={{ objectFit: "cover" }}
              height={"782px"}
              width={"100%"}
              src="/psa/psa28.png"
              alt=""
            />
          </FadingImage4>
        </Box>

        <Box>
          <FadingImage5
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "9350px",
              left: "35%",
              right: 0,
            }}
          >
            <img src="/psa/psa30.png" alt="" />
          </FadingImage5>
          <FadingImage5
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "9350px",
              left: "35%",
              right: 0,
            }}
          >
            <img src="/psa/psa31.png" alt="" />
          </FadingImage5>
        </Box>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"856px"}
            width={"100%"}
            src="psa/psa32.png"
            alt="foto de auto honda"
          />
        </Box>
        <Box>
          <FadingImage6
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "10196px",
              left: "4%",
              right: 0,
            }}
          >
            <img src="/psa/psa34.png" alt="" />
          </FadingImage6>
          <FadingImage6
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "10196px",
              left: "4%",
              right: 0,
            }}
          >
            <img src="/psa/psa35.png" alt="" />
          </FadingImage6>
          {/* <FadingImage6
          sx={{
            opacity: showSecondImage ? 2 : 1,
            top: "10256px",
            left: "4%",
            right: 0,
          }}
        >
          <img src="/psa/psa36.png" alt="" />
        </FadingImage6> */}
        </Box>
      </Hidden>
    </>
  );
};

export default PSA;
