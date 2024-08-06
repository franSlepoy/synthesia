import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const ScrollableImageContainer = styled(Box)`
  position: absolute;
  top: 1062px;
  left: 50%;
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

const ScrollableImageContainer1 = styled(Box)`
  position: absolute;
  top: 1962px;
  /* left: 525px; */
  left: 50%;
  transform: translateX(-50%);
  width: 374px;
  height: 486px;

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

const Franca = () => {
  const [imageIndices, setImageIndices] = useState([0, 0, 0]);

  const imageSets = [
    [
      { src: "franca/franca11.png" },
      { src: "franca/franca12.png" },
      { src: "franca/franca13.png" },
    ],
    [
      { src: "franca/franca14.png" },
      { src: "franca/franca15.png" },
      { src: "franca/franca16.png" },
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
              Proyecto: <strong>E-Commerce</strong>
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

        <Box
          position={"absolute"}
          top={"942px"}
          sx={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img src="franca/franca2.png" alt="computadora" />
        </Box>

        <ScrollableImageContainer>
          <img
            width={"677px"}
            style={{ objectFit: "cover" }}
            src="franca/franca9.png"
            alt="imagen de home de pagina"
          />
        </ScrollableImageContainer>

        <Box
          position={"absolute"}
          top={"1792px"}
          sx={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img
           
            height={"760px"}
            style={{ objectFit: "cover" }}
            src="franca/franca3.png"
            alt="celulares con imágeneás de la web mobile"
          />
        </Box>
        <Box
          position={"absolute"}
          top={"1692px"}
          sx={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img
            width={"100%"}
            height={"938px"}
            style={{ objectFit: "cover" }}
            src="franca/franca10.png"
            alt="celular del medio"
          />
        </Box>

        <ScrollableImageContainer1>
          <img
            width={"367px"}
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
          <Box display={"flex"}>
            {[0, 1, 2].map((index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  pt: 14,

                  width: "33.3%",
                  bgcolor: imageSets[imageIndices[index]][index].bgColor,
                }}
              >
                <img
                  width={"400px"}
                  height={"521px"}
                  src={imageSets[imageIndices[index]][index].src}
                  alt=""
                />
              </Box>
            ))}
          </Box>
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
        <Box   sx={{
          position: 'absolute',
          left: '50%',
          top:"3500px",
          transform: 'translateX(-50%)',

          
        }}>
          <img
            width={"960px"}
            height={"646px"}
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
