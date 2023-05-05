import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { NavLink } from "react-router-dom";

const pages = [<a   href="/">Club</a> , <a  className="TarifPages" href="/TarifPages">Tarif</a>, <a  className="planning" href="/PlanningPages">PLANNING</a>];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavSignIn() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container className="topBars" maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to={"/"}>
            <img
              width={"90px"} 
              src="data:image/jpeg;base64,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"
            />
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
       
      </Container>
    </AppBar>
  );
}
export default NavSignIn;
