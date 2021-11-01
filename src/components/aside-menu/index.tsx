import * as React from "react";
import { NavLink } from "react-router-dom";

import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Home, CompareArrows } from "@mui/icons-material";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AsideMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    {
      text: "Главная",
      path: "/feed",
      icon: <Home />,
    },
    {
      text: "Конвертер валют",
      path: "/exchange",
      icon: <CompareArrows />,
    },
  ];

  const toggleDrawer = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <Drawer
      onClick={() => toggleDrawer(false)}
      anchor={"left"}
      role="presentation"
      open={isOpen}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {menuItems.map((item) => (
            <NavLink exact to={item.path}>
              <ListItem button key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
export default AsideMenu;
