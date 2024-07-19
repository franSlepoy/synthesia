import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const ScrollableImageContainer = styled(Box)`
  position: absolute;
  top: 1230px;
  left: 17%;
  width: 28.5%;
  height: 262px; // Adjust height as needed
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  // Custom scrollbar styles
  &::-webkit-scrollbar {
    width: 12px;
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
  top: 2575px;
  left: 47%;
  transition: opacity 0.5s ease-in-out;
`;

const PSA = () => {
  const [imageIndices, setImageIndices] = useState([0, 0, 0]);
  const [showSecondImage, setShowSecondImage] = useState(false);
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
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box>
        <img
          style={{ objectFit: "cover" }}
          height={"856px"}
          width={"100%"}
          src="psa/psa.png"
          alt="foto de auto honda"
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
            Cliente: <strong>PSA Peugeot Citroen</strong>
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
        <img height={"856px"} width={"100%"} src="/psa/psa1.png" alt="" />
      </Box>

      <ScrollableImageContainer>
        <img width={"100%"} src="/psa/psa2.png" alt="" />
      </ScrollableImageContainer>

      <Box height={"700px"} display={"flex"} mt={-1}>
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
            <img src={imageSets[imageIndices[index]][index].src} alt="" />
          </Box>
        ))}
      </Box>

      <Box>
        <img style={{ objectFit: "cover" }} height={"782px"} width={"100%"} src="/psa/psa9.png" alt="PSA revista" />
      </Box>
      <FadingImage sx={{ opacity: showSecondImage ? 0 : 1 }}>
        <img src="/psa/psa10.png" alt="PSA revista" />
      </FadingImage>
      <FadingImage sx={{ opacity: showSecondImage ? 1 : 0 }}>
        <img src="/psa/psa11.png" alt="PSA revista" />
      </FadingImage>
      
      <Box>
        <img width={"100%"} src="/psa/psa12.png" alt="" />
      </Box>
      <Box>
        
      </Box>

    </>
  );
};

export default PSA;
