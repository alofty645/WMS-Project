import { Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const Uploadcsv = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Button
      sx={{
        backgroundColor: colors.blueAccent[700],
        color: colors.grey[100],
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
      }}
    >
      <FileUploadOutlinedIcon sx={{ mr: "10px" }} />
      Upload CSV
    </Button>
  );
};

export default Uploadcsv;
