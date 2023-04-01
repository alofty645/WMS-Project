import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Editbutton from "../../components/editbutton";
import NewProduct from "../forms/newproduct";
import Uploadcsv from "../forms/uploadcsv";
import { useEffect, useState } from "react";
import supabase from "../../supabase.js";

const Sales = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let { data: product } = await supabase.from("products").select("*");
    setProducts(product);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "product_sku", headerName: "Product ID" },
    {
      field: "product_description",
      headerName: "Product Description",
      flex: 1,
    },
    {
      field: "in_stock",
      headerName: "In Stock",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "bay_location",
      headerName: "Bay Location",
      flex: 1,
    },

    {
      field: "product_price",
      headerName: "Price",
      flex: 1,
    },

    {
      field: "product_status",
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
      <Header title="Products" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <NewProduct></NewProduct>
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
          rows={products}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Sales;
