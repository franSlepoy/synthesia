import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const FadingImage = styled(Box)`
  position: absolute;
  top: 2730px;

  transition: opacity 0.3s ease-in-out;
`;
const FadingImage1 = styled(Box)`
  position: absolute;
  top: 3600px;

  transition: opacity 0.3s ease-in-out;
`;
const FadingImage2 = styled(Box)`
  position: absolute;
  top: 5250px;

  transition: opacity 0.3s ease-in-out;
`;
const FadingImage3 = styled(Box)`
  position: absolute;
  top: 6120px;

  transition: opacity 0.3s ease-in-out;
`;

const SanMartin1 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4); // Cambiado a 4 para cuatro imágenes
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hidden lgDown>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"700px"}
            width={"100%"}
            src="sanMartin1/sanMartin1-1.png"
            alt="portada de San Martín"
          />
        </Box>

        <Box
          pt={5}
          mt={-1}
          sx={{
            backgroundColor: "#738DE5",
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
              Cliente: <strong>Municipalidad de San Martín</strong>
            </Typography>
          </Box>
          <Box width={"550px"}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "black",
              }}
            >
              Proyecto: <strong>Comunicación institucional</strong>
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
              Año: <strong>2014 - 2022</strong>
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box>
            <img
              style={{ objectFit: "cover" }}
              height={"741px"}
              width={"100%"}
              src="/sanMartin1/sanMartin1-2.png"
              alt="libros de 8M"
            />
          </Box>

          <Box mt={"-5px"}>
            <img
              style={{ objectFit: "cover" }}
              height={"841px"}
              width={"100%"}
              src="/sanMartin1/sanMartin1-3.png"
              alt="libros de 8M"
            />
          </Box>
        </Box>

        <Box p={8} width={"100%"} m={"auto"}>
          <img
            style={{ objectFit: "cover" }}
            height={"210px"}
            width={"100%"}
            src="sanMartin1/sanMartin1-4.png"
            alt="afiche de club en San Martín"
          />
        </Box>

        <Box>
          <Box position={"absolute"} ml={10} mt={10} zIndex={10}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Secretaría de Educación
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "medium",
                color: "black",
              }}
            >
              Brochure Educación y trabajo
            </Typography>
          </Box>

          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage
            sx={{
              opacity: currentImage === 0 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-5.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              opacity: currentImage === 1 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-6.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              opacity: currentImage === 2 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-8.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              opacity: currentImage === 3 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-9.png"
              alt=""
            />
          </FadingImage>
        </Box>

        <Box>
          <Box position={"absolute"} top={"3680px"} left={"100px"} zIndex={10}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Secretaría de Educación
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "medium",
                color: "black",
              }}
            >
              Brochure Educación y trabajo
            </Typography>
          </Box>

          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage1
            sx={{
              opacity: currentImage === 0 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-9.png"
              alt=""
            />
          </FadingImage1>
          <FadingImage1
            sx={{
              opacity: currentImage === 1 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-10.png"
              alt=""
            />
          </FadingImage1>
          <FadingImage1
            sx={{
              opacity: currentImage === 2 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-11.png"
              alt=""
            />
          </FadingImage1>
          <FadingImage1
            sx={{
              opacity: currentImage === 3 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-12.png"
              alt=""
            />
          </FadingImage1>
        </Box>

        <Box mt={200} height={"965px"}>
          <img
            width={"100%"}
            height={"965px"}
            style={{ objectFit: "cover" }}
            src="sanMartin1/sanMartin1-13.png"
            alt="afiche Plaza de la mujer"
          />
        </Box>

        <Box>
          <Box position={"absolute"} top={"5350px"} left={"100px"} zIndex={10}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "bold",
                color: "black",
                width: "271px",
                lineHeight: "28px",
              }}
            >
              Secretaría de Mujeres, Género e infancias
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "medium",
                color: "black",
                width: "271px",
                lineHeight: "20px",
                mt: 1,
              }}
            >
              Diseño de identidad Congreso de las Juventudes
            </Typography>
          </Box>

          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage2
            sx={{
              opacity: currentImage === 0 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-14.png"
              alt=""
            />
          </FadingImage2>
          <FadingImage2
            sx={{
              opacity: currentImage === 1 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-15.png"
              alt=""
            />
          </FadingImage2>
          <FadingImage2
            sx={{
              opacity: currentImage === 2 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-16.png"
              alt=""
            />
          </FadingImage2>
          <FadingImage2
            sx={{
              opacity: currentImage === 3 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-14.png"
              alt=""
            />
          </FadingImage2>
        </Box>

        <Box>
          <Box position={"absolute"} top={"6200px"} left={"100px"} zIndex={10}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "bold",
                color: "black",
                width: "271px",
                lineHeight: "28px",
              }}
            >
              Diseño de identidad
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "medium",
                color: "black",
                width: "271px",
                lineHeight: "20px",
                mt: 1,
              }}
            >
              40 años de Democracia
            </Typography>
          </Box>

          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage3
            sx={{
              opacity: currentImage === 0 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-17.png"
              alt=""
            />
          </FadingImage3>
          <FadingImage3
            sx={{
              opacity: currentImage === 1 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-18.png"
              alt=""
            />
          </FadingImage3>
          <FadingImage3
            sx={{
              opacity: currentImage === 2 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-19.png"
              alt=""
            />
          </FadingImage3>
          <FadingImage3
            sx={{
              opacity: currentImage === 3 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-19.png"
              alt=""
            />
          </FadingImage3>
        </Box>
      </Hidden>
    </>
  );
};

export default SanMartin1;
