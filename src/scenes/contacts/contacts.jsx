import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Editbutton from "../../components/editbutton";
import NewContact from "../forms/newcontact";
import Uploadcsv from "../forms/uploadcsv";
import { useEffect, useState } from "react";
import supabase from "../../supabase.js";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  async function getContacts() {
    let { data: contact } = await supabase.from("contacts").select("*");
    setContacts(contact);
    console.log(contact);
  }

  useEffect(() => {
    getContacts();
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "contact_type", headerName: "Contact Type" },
    {
      field: "first_name",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "contact_email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "billing_address",
      headerName: "Billing Address",
      flex: 1,
    },

    {
      field: "Admin",
      headerName: "Admin",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return <Editbutton></Editbutton>;
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Contacts" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <NewContact></NewContact>
        <Uploadcsv></Uploadcsv>
      </Box>
      <Box
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
            margin: "10px",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={contacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
