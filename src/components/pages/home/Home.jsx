import { Link } from "react-router-dom";
import EscenaTextos from "../../EscenaTextos";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Typography>Hola soy el home</Typography>

      <Box position={"absolute"}zIndex={10} top={"450px"} left={"40%"}>
        <Link to={"/proyectos"}>Proyectos</Link>
      </Box>

      <EscenaTextos />
    </>
  );
};

export default Home;
