import { Box, Button, TextField } from "@mui/material";
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
import supabase from "../../supabase.js";
import * as yup from "yup";

const NewProduct = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);

  async function setNewProduct(values) {
    const { data, error } = await supabase.from("products").insert([
      {
        product_sku: values.product_sku,
        product_description: values.product_description,
        in_stock: values.in_stock,
        product_price: values.product_price,
        bay_location: values.bay_location,
        product_status: values.product_status,
      },
    ]);
  }

  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (values) => {
    setNewProduct(values);
    setOpen(false);
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
              initialValues={initialValues}
              validationSchema={checkoutSchema}
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
                      value={values.product_sku}
                      name="product_sku"
                      variant="filled"
                      type="string"
                      label="SKU"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      value={values.product_description}
                      name="product_description"
                      variant="filled"
                      type="string"
                      label="Product Description"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      value={values.in_stock}
                      name="in_stock"
                      variant="filled"
                      type="string"
                      label="In Stock"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      value={values.bay_location}
                      name="bay_location"
                      variant="filled"
                      type="string"
                      label="Bay Location"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      value={values.product_price}
                      name="product_price"
                      variant="filled"
                      type="string"
                      label="Price"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ gridColumn: "span 2" }}
                    />

                    <Box sx={{ gridColumn: "span 2" }}>
                      <FormControl fullWidth>
                        <InputLabel>Product Status</InputLabel>
                        <Select
                          value={values.product_status}
                          name="product_status"
                          label="Pricing Status"
                          onChange={handleChange}
                        >
                          <MenuItem value={"Active"}>Active</MenuItem>
                          <MenuItem value={"Inactive"}>Inactive</MenuItem>
                          <MenuItem value={"Draft"}>Draft</MenuItem>
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

const checkoutSchema = yup.object().shape({
  product_sku: yup.string().required("required"),
  product_description: yup.string().required("required"),
  in_stock: yup.number().required("required"),
  product_price: yup.number().required("required"),
  bay_location: yup.string(),
});
const initialValues = {
  product_sku: "",
  product_description: "",
  in_stock: "",
  product_price: "",
  bay_location: "",
  product_status: "",
};

export default NewProduct;
