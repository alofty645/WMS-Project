import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
// import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const NewProduct = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          mr: "10px",
          backgroundColor: colors.blueAccent[700],
          color: colors.grey[100],
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
        }}
      >
        <AddIcon sx={{ mr: "10px" }} />
        New Product
      </Button>
      <Dialog open={open} /*</Box>onClose={handleClose}*/>
        <DialogContent>
          <Box m="20px">
            <Header title="New Product" />

            <Formik
              onSubmit={handleFormSubmit}
              //   initialValues={initialValues}
              //   validationSchema={checkoutSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(6, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 4",
                      },
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Product Code"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Product Description"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="In Stock"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Price"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 2" }}
                    />

                    <Box sx={{ gridColumn: "span 2" }}>
                      <FormControl fullWidth>
                        <InputLabel>Product Status</InputLabel>
                        <Select label="Pricing Category">
                          <MenuItem defaultValue value={1}>
                            Active
                          </MenuItem>
                          <MenuItem value={2}>Inactive</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="end" mt="20px">
                    <Button
                      onClick={handleClose}
                      sx={{
                        mr: "10px",
                        backgroundColor: colors.blueAccent[600],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "0px 30px ",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      sx={{
                        mr: "10px",
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                      }}
                    >
                      Add New Product
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default NewProduct;
