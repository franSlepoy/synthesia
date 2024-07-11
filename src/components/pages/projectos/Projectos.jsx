import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
const Proyectos = () => {
  return (
    <Box>
      <Box>
        <Typography>Proyectos </Typography>
      </Box>
      <Box component={Link} to="/honda">
        <Typography>Honda</Typography>
      </Box>
      <Box component={Link} to="/honda1">
        <Typography>Honda1</Typography>
      </Box>
      <Box>
        <Typography>Proyecto 1</Typography>
      </Box>
      <Box>
        <Typography>Proyecto 1</Typography>
      </Box>
      <Box>
        <Typography>Proyecto 1</Typography>
      </Box>
      <Box>
        <Typography>Proyecto 1</Typography>
      </Box>
      <Box>
        <Typography>Proyecto 1</Typography>
      </Box>
    </Box>
  );
};

export default Proyectos;
