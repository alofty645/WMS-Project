import { Button, Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const Editbutton = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="30%" m="0 auto" p="5px" display="flex" justifyContent="center">
      <Button
        sx={{
          backgroundColor: colors.greenAccent[600],
          color: colors.grey[100],
          borderRadius: "30px",
        }}
      >
        <EditOutlinedIcon />
      </Button>

      <Typography color={colors.grey[100]} sx={{ ml: "5px" }}></Typography>
    </Box>
  );
};

export default Editbutton;
