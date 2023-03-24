import { Button, Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { mockDataInvoices, productData } from "../../data/mockData";

const Sales = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "prodid", headerName: "Product ID" },
    {
      field: "proddesc",
      headerName: "Product Description",
      flex: 1,
    },
    {
      field: "instock",
      headerName: "In Stock",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "baylocation",
      headerName: "Location",
      flex: 1,
    },

    {
      field: "prodprice",
      headerName: "Price",
      flex: 1,
    },

    {
      field: "Admin",
      headerName: "Admin",
      flex: 2,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="30%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.greenAccent[600]}
            borderRadius="30px"
          >
            <EditOutlinedIcon />
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              Edit
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Products" />
      <Box>
        <Button
          sx={{
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

export default Sales;
