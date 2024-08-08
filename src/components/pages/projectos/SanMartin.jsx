import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const FadingImage = styled(Box)`
  position: absolute;
  /* top: 1808px;
  left: 258px; */
  transition: opacity 0.3s ease-in-out;
`;

const SanMartin = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4); // Cambiado a 4 para cuatro imágenes
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [imageIndices, setImageIndices] = useState([0, 0, 0]);

  const imageSets = [
    [{ src: "sanMartin/sanMartin7.png" }, { src: "sanMartin/sanMartin8.png" }],
    [
      { src: "sanMartin/sanMartin11.png" },
      { src: "sanMartin/sanMartin12.png" },
    ],
  ];
  const imageSets1 = [
    [{ src: "sanMartin/sanMartin9.png" }, { src: "sanMartin/sanMartin10.png" }],
    [
      { src: "sanMartin/sanMartin13.png" },
      { src: "sanMartin/sanMartin14.png" },
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

  return (
    <>
      <Hidden lgDown>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"696px"}
            width={"100%"}
            src="sanMartin/sanMartin.png"
            alt="portada de San Martín"
          />
        </Box>

        <Box
          pt={5}
          mt={-1}
          sx={{
            backgroundColor: "#D5CAA4",
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
              Proyecto: <strong>Libro #JuntasLibresIguales</strong>
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
              Año: <strong>2022</strong>
            </Typography>
          </Box>
        </Box>

        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"856px"}
            width={"100%"}
            src="/sanMartin/sanMartin1.png"
            alt="libros de 8M"
          />
        </Box>
        <Box height={"856px"} mt={-2} mr={0}>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            height={"935px"}
            src="sanMartin/sanMartin2.png"
            alt="foto de evento de 8M en San Martín"
          />
          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage
            sx={{
              top: "1808px",
              left: "50%",
              transform: "translateX(-50%)",

              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img src="sanMartin/sanMartin3.png" alt="" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1808px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img src="sanMartin/sanMartin4.png" alt="" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1808px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img src="sanMartin/sanMartin5.png" alt="" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1808px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: currentImage === 3 ? 1 : 0,
            }}
          >
            <img src="sanMartin/sanMartin6.png" alt="" />
          </FadingImage>
        </Box>

        <Box
          mt={-1}
          width={"100%"}
          sx={{
            background: "linear-gradient(225deg, #E3E3E1 0%, #E4E0D4 100%)",
          }}
        >
          <Box display={"flex"} justifyContent={"space-around"}>
            {[0, 1].map((index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  pt: 16,

                  bgcolor: imageSets[imageIndices[index]][index].bgColor,
                }}
              >
                <img
                  width={"95%"}
                  src={imageSets[imageIndices[index]][index].src}
                  alt=""
                />
              </Box>
            ))}
          </Box>
          <Box display={"flex"} justifyContent={"space-around"}>
            {[0, 1].map((index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  pt: 4,

                  bgcolor: imageSets1[imageIndices[index]][index].bgColor,
                }}
              >
                <img
                  width={"95%"}
                  src={imageSets1[imageIndices[index]][index].src}
                  alt=""
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default SanMartin;
