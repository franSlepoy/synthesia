import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const ScrollableImageContainer = styled(Box)`
  position: absolute;
  /* top: 1096px; */
  /* left: 19.9%;
  transform: translateX(-20%); */
  width: 406px;
  height: 245px;
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

const ScrollableImageContainer1 = styled(Box)`
  position: absolute;
  /* top: 7954px;
  left: 254px; */
  width: 406px;
  height: 245px;
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
const FadingImage = styled(Box)`
  position: absolute;

  /* left: 47%; */
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
      <Hidden only={"lg"}>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"1188px"}
            width={"100%"}
            src="psa/psa.png"
            alt="portada de PSA"
          />
        </Box>

        <Box
          pt={7}
          mt={-1}
          sx={{
            backgroundColor: "#2F5183",
            display: "flex",
            width: "100%",
            height: "141px",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "28px",
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
                fontSize: "28px",
                lineHeight: "21.78px",
                color: "#FFFFFF",
                width: "630px",
                ml: -5,
              }}
            >
              Proyecto: <strong>Programa de comunicación </strong>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "28px",
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
            height={"956px"}
            width={"100%"}
            src="/psa/psa1.png"
            alt="foto de auto"
          />
        </Box>
        <Box
          position={"absolute"}
          top={"1542px"}
          sx={{ left: "20%", transform: "translateX(-29%)" }}
        >
          <img
            width={"568px"}
            height={"384px"}
            style={{ objectFit: "cover" }}
            src="psa/psa38.png"
            alt="computadora"
          />
        </Box>

        <ScrollableImageContainer
          top={"1596px"}
          sx={{ left: "20%", transform: "translateX(-20%)" }}
        >
          <img
            width={"398px"}
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
              <img
                width={"320px"}
                src={imageSets[imageIndices[index]][index].src}
                alt="carrusel de imágenes"
              />
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
        <FadingImage
          sx={{
            top: "3150px",
            left: "70%",
            transform: "translateX(-50%)",
            opacity: showSecondImage ? 0 : 1,
          }}
        >
          <img width={"636px"} src="/psa/psa10.png" alt="PSA revista" />
        </FadingImage>
        <FadingImage
          sx={{
            top: "3150px",
            left: "70%",
            transform: "translateX(-50%)",
            opacity: showSecondImage ? 1 : 0,
          }}
        >
          <img width={"636px"} src="/psa/psa11.png" alt="PSA revista" />
        </FadingImage>

        <Box width={"100%"} textAlign={"center"}>
          <img
            style={{ objectFit: "cover" }}
            height={"806px"}
            width={"1500px"}
            src="/psa/psa12.png"
            alt="públicidad de seguridad vial"
          />
        </Box>

        <Box width={"100%"} display={"flex"} height={"1084px"}>
          <Box width={"50%"} height={"782px"}>
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"1084px"}
              src="/psa/psa13.png"
              alt="compu"
            />
          </Box>
          <Box width={"50%"} height={"882px"} bgcolor={"#F04F50"}>
            <FadingImage1
              sx={{
                position: "absolute",
                top: "4672px",
                width: "50%",
                /*   left: '75%',
          transform: 'translateX(-50%)', */
                opacity: showSecondImage ? 0 : 1,
              }}
            >
              <img
                width={"100%"}
                style={{ objectFit: "cover" }}
                height={"1084px"}
                src="/psa/psa14.png"
                alt="seguridad vial amarillo"
              />
            </FadingImage1>
            <FadingImage1
              sx={{
                position: "absolute",
                top: "4674px",
                opacity: showSecondImage ? 1 : 0,
                width: "50%",
              }}
            >
              <img
                style={{ objectFit: "cover" }}
                width={"100%"}
                height={"1084px"}
                src="/psa/psa15.png"
                alt="seguridad vial celeste"
              />
            </FadingImage1>
          </Box>
        </Box>

        <Box position="relative" height="982px">
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
              height={"1082px"}
              src="/psa/psa16.png"
              alt="imagenes de fondo, autos"
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
              height={"1082px"}
              src="/psa/psa17.png"
              alt="imagenes de fondo, autos"
            />
          </FadingImage2>
        </Box>

        <Box
          position={"absolute"}
          top={"6040px"}
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img src="/psa/psa18.png" alt="Citroen Lounge, auto centrado" />
        </Box>

        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            bgcolor={"#E9E8E3"}
            height={"1300px"}
            pt={18}
            pb={6}
          >
            <Box>
              <img
                width={"100%"}
                src="/psa/psa19.png"
                alt="publicidad, doy una mano"
              />
            </Box>
            <Box>
              <img
                width={"100%"}
                src="/psa/psa20.png"
                alt="publicidad, doy una mano"
              />
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
                  left: "40%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  width={"382px"}
                  height={"516px"}
                  src="/psa/psa22.png"
                  alt="tapa de revista en carrusel"
                />
              </FadingImage3>
              <FadingImage3
                sx={{
                  opacity: currentImage === 1 ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: "40%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  width={"382px"}
                  height={"516px"}
                  src="/psa/psa23.png"
                  alt="tapa de revista en carrusel"
                />
              </FadingImage3>
              <FadingImage3
                sx={{
                  opacity: currentImage === 2 ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: "40%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  width={"382px"}
                  height={"516px"}
                  src="/psa/psa24.png"
                  alt="tapa de revista en carrusel"
                />
              </FadingImage3>
            </Box>
          </Box>

          <Box width={"50%"}>
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"782px"}
              src="psa/psa21.png"
              alt="imagen de tablet"
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
        <Box
          position={"absolute"}
          top={"9104px"}
          sx={{ left: "32%", transform: "translateX(-50%)" }}
        >
          <img
          width={"568px"}
          height={"384px"}
            style={{ objectFit: "cover" }}
            src="psa/psa38.png"
            alt="computadora"
          />
        </Box>

        <ScrollableImageContainer1
          top={"9154px"}
          sx={{ left: "32.1%", transform: "translateX(-50%)" }}
        >
          <img
            width={"399px"}
            height={"573px"}
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
            alt="pilotos en la nieve"
          />
        </Box>

        <Box mt={-1} position="relative" height="982px">
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
              height={"1482px"}
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
              height={"1482px"}
              width={"100%"}
              src="/psa/psa28.png"
              alt="imagen de fondo, autos"
            />
          </FadingImage4>
        </Box>

        <Box>
          <FadingImage5
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "10660px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              width={"354px"}
              height={"567px"}
              src="/psa/psa30.png"
              alt="imagen de fondo, autos"
            />
          </FadingImage5>
          <FadingImage5
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "10660px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img width={"354px"} height={"567px"} src="/psa/psa31.png" alt="" />
          </FadingImage5>
        </Box>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"1456px"}
            width={"100%"}
            src="psa/psa32.png"
            alt="foto de auto honda"
          />
        </Box>
        <Box>
          <FadingImage6
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "12096px",
              left: "23%",
              transform: "translateX(-50%)",
            }}
          >
            <img width={"423px"} height={"598px"} src="/psa/psa34.png" alt="" />
          </FadingImage6>
          <FadingImage6
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "12096px",
              left: "23%",
              transform: "translateX(-50%)",
            }}
          >
            <img width={"423px"} height={"598px"} src="/psa/psa35.png" alt="" />
          </FadingImage6>
        </Box>
      </Hidden>
      <Hidden only={"xl"}>
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

        <Box
          position={"absolute"}
          top={"1038px"}
          sx={{ left: "20%", transform: "translateX(-29%)" }}
        >
          <img
            width={"568px"}
            height={"384px"}
            style={{ objectFit: "cover" }}
            src="psa/psa38.png"
            alt="computadora"
          />
        </Box>

        <ScrollableImageContainer
          top={"1096px"}
          sx={{ left: "20%", transform: "translateX(-20%)" }}
        >
          <img
            width={"398px"}
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
              <img
                width={"320px"}
                src={imageSets[imageIndices[index]][index].src}
                alt="carrusel de imágenes"
              />
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
        <FadingImage
          sx={{
            top: "2500px",
            left: "70%",
            transform: "translateX(-50%)",
            opacity: showSecondImage ? 0 : 1,
          }}
        >
          <img width={"636px"} src="/psa/psa10.png" alt="PSA revista" />
        </FadingImage>
        <FadingImage
          sx={{
            top: "2500px",
            left: "70%",
            transform: "translateX(-50%)",
            opacity: showSecondImage ? 1 : 0,
          }}
        >
          <img width={"636px"} src="/psa/psa11.png" alt="PSA revista" />
        </FadingImage>

        <Box mt={-1}>
          <img
            style={{ objectFit: "cover" }}
            height={"756px"}
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
          <Box width={"50%"} height={"782px"} bgcolor={"#F04F50"}>
            <FadingImage1
              sx={{
                position: "absolute",
                top: "3984px",
                width: "50%",
                /*   left: '75%',
          transform: 'translateX(-50%)', */
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
                top: "3984px",
                opacity: showSecondImage ? 1 : 0,
                width: "50%",
              }}
            >
              <img
                style={{ objectFit: "cover" }}
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
              alt="imagenes de fondo, autos"
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
              alt="imagenes de fondo, autos"
            />
          </FadingImage2>
        </Box>

        <Box
          position={"absolute"}
          top={"4940px"}
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img src="/psa/psa18.png" alt="Citroen Lounge, auto centrado" />
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
              <img
                width={"100%"}
                src="/psa/psa19.png"
                alt="publicidad, doy una mano"
              />
            </Box>
            <Box>
              <img
                width={"100%"}
                src="/psa/psa20.png"
                alt="publicidad, doy una mano"
              />
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
                  left: "40%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  width={"382px"}
                  height={"516px"}
                  src="/psa/psa22.png"
                  alt="tapa de revista en carrusel"
                />
              </FadingImage3>
              <FadingImage3
                sx={{
                  opacity: currentImage === 1 ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: "40%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  width={"382px"}
                  height={"516px"}
                  src="/psa/psa23.png"
                  alt="tapa de revista en carrusel"
                />
              </FadingImage3>
              <FadingImage3
                sx={{
                  opacity: currentImage === 2 ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: "40%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  width={"382px"}
                  height={"516px"}
                  src="/psa/psa24.png"
                  alt="tapa de revista en carrusel"
                />
              </FadingImage3>
            </Box>
          </Box>

          <Box width={"50%"}>
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"782px"}
              src="psa/psa21.png"
              alt="imagen de tablet"
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
        <Box
          position={"absolute"}
          top={"7902px"}
          sx={{ left: "32%", transform: "translateX(-50%)" }}
        >
          <img
            width={"568px"}
            height={"384px"}
            style={{ objectFit: "cover" }}
            src="psa/psa38.png"
            alt="computadora"
          />
        </Box>

        <ScrollableImageContainer1
          top={"7954px"}
          sx={{ left: "32.1%", transform: "translateX(-50%)" }}
        >
          <img
            width={"399px"}
            height={"573px"}
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

        <Box mt={-1} position="relative" height="782px">
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
              alt="imagen de fondo, autos"
            />
          </FadingImage4>
        </Box>

        <Box>
          <FadingImage5
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "9280px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              width={"354px"}
              height={"567px"}
              src="/psa/psa30.png"
              alt="imagen de fondo, autos"
            />
          </FadingImage5>
          <FadingImage5
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "9280px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img width={"354px"} height={"567px"} src="/psa/psa31.png" alt="" />
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
              top: "10096px",
              left: "23%",
              transform: "translateX(-50%)",
            }}
          >
            <img width={"423px"} height={"598px"} src="/psa/psa34.png" alt="" />
          </FadingImage6>
          <FadingImage6
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "10096px",
              left: "23%",
              transform: "translateX(-50%)",
            }}
          >
            <img width={"423px"} height={"567px"} src="/psa/psa35.png" alt="" />
          </FadingImage6>
        </Box>
      </Hidden>
    </>
  );
};

export default PSA;
