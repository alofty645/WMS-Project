import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Editbutton from "../../components/editbutton";
import Uploadcsv from "../forms/uploadcsv";
import NewSale from "../forms/newsale";
import { useEffect, useState } from "react";
import supabase from "../../supabase.js";

const Sales = () => {
  const [sales, setSales] = useState([]);

  async function getSales() {
    let { data: sale } = await supabase.from("sales").select("*");
    setSales(sale);
    console.log(sale);
  }

  useEffect(() => {
    getSales();
  }, []);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "Order ID" },
    {
      field: "sale_date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Customer",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "sale_type",
      headerName: "Sale Type",
      flex: 1,
    },
    {
      field: "shipping_address",
      headerName: "Shipping Address",
      flex: 1,
    },
    {
      field: "products",
      headerName: "Products",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Order Total",
      flex: 1,
    },
    {
      field: "sale_status",
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
      <Header title="Sales" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <NewSale></NewSale>
        </Box>
        <Box>
          <Uploadcsv></Uploadcsv>
        </Box>
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
          rows={sales}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Sales;
