import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          borderRadius: "30px",
          margin: "10px 10px 10px 10px !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
          borderRadius: "100px",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#00A74B !important",
          backgroundColor: colors.grey[100],
          borderRadius: "30px",
          width: "90%",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  WMS Project
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sales"
              to="/Sales"
              icon={<ShoppingCartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Products"
              to="/products"
              icon={<Inventory2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Purchase Orders"
              to="/purchaseorders"
              icon={<ShoppingBasketOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* WMS accordion */}

            <Accordion
              elevation={0}
              sx={{ background: `${colors.primary[400]} !important` }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {<WarehouseOutlinedIcon sx={{ m: "0 18px 0px 10px" }} />}

                <Typography>WMS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Item
                  title="Picking"
                  to="/picking"
                  icon={<HelpOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Packing"
                  to="/packing"
                  icon={<HelpOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Shipping"
                  to="/shipping"
                  icon={<HelpOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Receiving"
                  to="/receiving"
                  icon={<HelpOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Replenishment"
                  to="/replenishment"
                  icon={<HelpOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </AccordionDetails>
            </Accordion>

            {/* Second accordion, will change over time */}

            <Accordion
              elevation={0}
              sx={{ background: `${colors.primary[400]} !important` }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {<SettingsOutlinedIcon sx={{ m: "0 15px 10px 13px" }} />}

                <Typography>Other</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Item
                  title="Forecasting"
                  to="/forecasting"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Distribution"
                  to="/distribution"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Settings"
                  to="/settings"
                  icon={<MapOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
