import React, { useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material/";

import MenuIcon from "@mui/icons-material/Menu";

import AsideMenu from "../../components/aside-menu";

const Navbar = () => {
  const [isAsideMenuOpen, setAsideMenuOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AsideMenu isOpen={isAsideMenuOpen} setIsOpen={setAsideMenuOpen} />
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setAsideMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Products & Prices Catalog
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default React.memo(Navbar);
