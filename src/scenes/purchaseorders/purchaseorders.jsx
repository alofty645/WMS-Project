import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { productData } from "../../data/mockData";
import Editbutton from "../../components/editbutton";
import Uploadcsv from "../forms/uploadcsv";
import NewPurchaseOrder from "../forms/newpurchaseorder";

const Purchaseorders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "prodid", headerName: "Purchase ID" },
    { field: "podate", headerName: "Date" },
    {
      field: "proddesc",
      headerName: "Supplier ",
      flex: 1,
    },
    {
      field: "instock",
      headerName: "Items",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "baylocation",
      headerName: "Expected Date",
      flex: 1,
    },

    {
      field: "prodprice",
      headerName: "Total Purchase Price",
      flex: 1,
    },
    {
      field: " ",
      headerName: "Status",
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
      <Header title="Purchase Orders" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <NewPurchaseOrder></NewPurchaseOrder>
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
          rows={productData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Purchaseorders;
