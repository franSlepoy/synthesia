import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
const Proyectos = () => {
  return (
    <Box>
      <Box>
        <Typography>Proyectos </Typography>
      </Box>
      <Box component={Link} to="/PSA">
        <Typography>PSA Peugeot Citroën</Typography>
      </Box>
      <Box component={Link} to="/Franca">
        <Typography>Franca</Typography>
      </Box>
      <Box component={Link} to="/DrayTek">
        <Typography>DrayTek</Typography>
      </Box>
      <Box component={Link} to="/IMB">
        <Typography>IMB</Typography>
      </Box>
      <Box component={Link} to="/honda">
        <Typography>Honda</Typography>
      </Box>
      <Box component={Link} to="/honda1">
        <Typography>Honda1</Typography>
      </Box>
      <Box component={Link} to="/TNyPlatex">
        <Typography>IMB Platex</Typography>
      </Box>
      
      <Box component={Link} to="/MinisterioDeObrasPublicas">
        <Typography>Ministerio de obras públicas</Typography>
      </Box>
      <Box component={Link} to="/SanMartín">
        <Typography>Municipalidad de San Martín</Typography>
      </Box>
      <Box component={Link} to="/SanMartín1">
        <Typography>Municipalidad de San Martín 1</Typography>
      </Box>
      <Box component={Link} to="/Tyme">
        <Typography>Tyme</Typography>
      </Box>

     

      
    </Box>
  );
};

export default Proyectos;
