import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
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

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const NewSale = () => {
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
        New Sale
      </Button>
      <Dialog open={open}>
        <DialogContent>
          <Box m="20px">
            <Header title="New Sale" />

            <Formik onSubmit={handleFormSubmit}>
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
                    <Box sx={{ gridColumn: "span 2" }}>
                      <FormControl fullWidth>
                        <InputLabel>Sale Type</InputLabel>
                        <Select label="Pricing Category">
                          <MenuItem value={1}>B2C</MenuItem>
                          <MenuItem value={2}>B2B</MenuItem>
                          <MenuItem value={3}>Transfer</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box sx={{ gridColumn: "span 2" }}>
                      <FormControl fullWidth>
                        <InputLabel>Sale Status</InputLabel>
                        <Select label="Pricing Category">
                          <MenuItem value={1}>Draft</MenuItem>
                          <MenuItem value={2}>New</MenuItem>
                          <MenuItem value={3}>Picking</MenuItem>
                          <MenuItem value={4}>Packing</MenuItem>
                          <MenuItem value={6}>Shipped</MenuItem>
                          <MenuItem value={6}>In Transit</MenuItem>
                          <MenuItem value={7}>Delivered</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box sx={{ gridColumn: "span 2" }}></Box>
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Sale Date"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Customer"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 4" }}
                    />

                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Shipping Address"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 6" }}
                    />

                    <Typography fullWidth>
                      <h2>Products</h2>
                    </Typography>

                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Add a Product"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 6" }}
                    />

                    <Box
                      style={{
                        height: "100%",
                        width: "100%",
                        gridColumn: "span 6",
                      }}
                    >
                      <TableContainer>
                        <Table aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Product ID</TableCell>
                              <TableCell>Product Description</TableCell>
                              <TableCell>In Stock</TableCell>
                              <TableCell>Location</TableCell>
                              <TableCell>Price</TableCell>
                              <TableCell>Status</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>123</TableCell>
                              <TableCell>Test Product</TableCell>
                              <TableCell>10</TableCell>
                              <TableCell>01A</TableCell>
                              <TableCell>$50</TableCell>
                              <TableCell>Active</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>123</TableCell>
                              <TableCell>Test Product</TableCell>
                              <TableCell>10</TableCell>
                              <TableCell>01A</TableCell>
                              <TableCell>$50</TableCell>
                              <TableCell>Active</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>123</TableCell>
                              <TableCell>Test Product</TableCell>
                              <TableCell>10</TableCell>
                              <TableCell>01A</TableCell>
                              <TableCell>$50</TableCell>
                              <TableCell>Active</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                    <Box sx={{ gridColumn: "span 4" }}></Box>

                    <h3>Order Total: </h3>
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
                      Add New Sale
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

export default NewSale;
