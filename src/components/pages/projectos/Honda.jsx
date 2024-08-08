import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const FadingImage = styled(Box)`
  transition: opacity 0.5s ease-in-out;
`;

const Honda = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 5); // Cambiado a 4 para cuatro imágenes
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
            src="honda/honda.png"
            alt="portada de PSA"
          />
        </Box>

        <Box
          pt={7}
          mt={-1}
          sx={{
            backgroundColor: "#E11F27",
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
              Cliente: <strong>Honda Argentina</strong>
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
                width:"430px"
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
                fontSize: "28px",
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
            style={{ objectFit: "cover" }}
            height={"1290px"}
            width={"100%"}
            src="/honda/honda1.png"
            alt="foto de moto"
          />
        </Box>

        <Box textAlign={"center"} mt={20} height={"1550px"}  >
          <img
            style={{ objectFit: "cover" }}
            height={"1350px"}
            width={"90%"}
            src="honda/honda2.png"
            alt="4 fotos de revista Honda"
          />
        </Box>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"1165px"}
            width={"100%"}
            src="honda/honda3.png"
            alt="foto de auto honda"
          />
        </Box>

        <Box>
          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "4450px",
              transform: "translateX(-50%)",
              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img
              width={"1137px"}
              height={"848px"}
              src="honda/honda4.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "4450px",
              transform: "translateX(-50%)",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img
              width={"1137px"}
              height={"848px"}
              src="honda/honda5.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "4450px",
              transform: "translateX(-50%)",
              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img
              width={"1137px"}
              height={"848px"}
              src="honda/honda6.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "4450px",
              transform: "translateX(-50%)",
              opacity: currentImage === 3 ? 1 : 0,
            }}
          >
            <img
              width={"1137px"}
              height={"848px"}
              src="honda/honda7.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "4450px",
              transform: "translateX(-50%)",
              opacity: currentImage === 4 ? 1 : 0,
            }}
          >
            <img
              width={"1137px"}
              height={"848px"}
              src="honda/honda8.png"
              alt=""
            />
          </FadingImage>
        </Box>
      </Hidden>

      <Hidden only={"xl"}>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"696px"}
            width={"100%"}
            src="honda/honda.png"
            alt="portada de PSA"
          />
        </Box>

        <Box
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
            style={{ objectFit: "cover" }}
            height={"856px"}
            width={"100%"}
            src="/honda/honda1.png"
            alt="foto de auto"
          />
        </Box>

        <Box textAlign={"center"} pt={5} pb={5}>
          <img
            style={{ objectFit: "cover" }}
            height={"767px"}
            width={"80%"}
            src="honda/honda2.png"
            alt="4 fotos de revista Honda"
          />
        </Box>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"840px"}
            width={"100%"}
            src="honda/honda3.png"
            alt="foto de auto honda"
          />
        </Box>

        <Box>
          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "2650px",
              transform: "translateX(-50%)",
              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img
              width={"820px"}
              height={"579px"}
              src="honda/honda4.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "2650px",
              transform: "translateX(-50%)",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img
              width={"820px"}
              height={"579px"}
              src="honda/honda5.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "2650px",
              transform: "translateX(-50%)",
              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img
              width={"820px"}
              height={"579px"}
              src="honda/honda6.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "2650px",
              transform: "translateX(-50%)",
              opacity: currentImage === 3 ? 1 : 0,
            }}
          >
            <img
              width={"820px"}
              height={"579px"}
              src="honda/honda7.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "2650px",
              transform: "translateX(-50%)",
              opacity: currentImage === 4 ? 1 : 0,
            }}
          >
            <img
              width={"820px"}
              height={"579px"}
              src="honda/honda8.png"
              alt=""
            />
          </FadingImage>
        </Box>
      </Hidden>
    </>
  );
};

export default Honda;
