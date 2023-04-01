import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
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

const NewContact = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);

  const [type, setType] = React.useState("");

  const handleType = (event) => {
    setType(event.target.value);
  };

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
        New Contact
      </Button>
      <Dialog open={open} /*</Box>onClose={handleClose}*/>
        <DialogContent>
          <Box m="20px">
            <Header title="New Contact" />

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
                      fullWidth
                      variant="filled"
                      type="text"
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={!!touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      name="lastName"
                      error={!!touched.lastName && !!errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Contact Number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.contact}
                      name="contact"
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Business"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.business}
                      name="business"
                      error={!!touched.business && !!errors.business}
                      helperText={touched.business && errors.business}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Billing Address"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.address}
                      name="address"
                      error={!!touched.address && !!errors.address}
                      helperText={touched.address && errors.address}
                      sx={{ gridColumn: "span 4" }}
                    />
                    {/* <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="City"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.city}
                      name="city"
                      error={!!touched.city && !!errors.city}
                      helperText={touched.city && errors.city}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Country"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.country}
                      name="Country"
                      error={!!touched.country && !!errors.country}
                      helperText={touched.country && errors.subcountryurb}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Postcode"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.postcode}
                      name="Postcode"
                      error={!!touched.postcode && !!errors.postcode}
                      helperText={touched.postcode && errors.postcode}
                      sx={{ gridColumn: "span 2" }}
                    /> */}
                    <Box sx={{ gridColumn: "span 2" }} />
                    <Box sx={{ gridColumn: "span 2" }}>
                      <FormControl fullWidth>
                        <InputLabel>Contact Type</InputLabel>
                        <Select
                          label="Contact"
                          value={values.contacttype}
                          error={!!touched.contacttype && !!errors.contacttype}
                          helperText={touched.contacttype && errors.contacttype}
                          onChange={handleType}
                        >
                          <MenuItem value={1}>B2C Customer</MenuItem>
                          <MenuItem value={2}>B2B Customer</MenuItem>
                          <MenuItem value={3}>Supplier</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    {/* <Box sx={{ gridColumn: "span 2" }}>
                      <FormControl fullWidth>
                        <InputLabel>Pricing Category</InputLabel>
                        <Select defaultValue value={1} label="Pricing Category">
                          <MenuItem value={0}>None</MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                        </Select>
                      </FormControl>
                    </Box> */}
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
                      Add New Contact
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
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  business: yup.string(),
  email: yup.string().email("invalid email").required("required"),
  contact: yup.string(),
  address: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address: "",
};

export default NewContact;
