import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
import Pets from "@mui/icons-material/Pets";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Milltech
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }}></Pets>
        <Search>
          <InputBase placeholder="Search...." />
        </Search>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon color="white" />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://www.pexels.com/photo/sea-fashion-woman-blue-9510147/"
            onClick= {(e) => setOpen(true)}
          ></Avatar>
        </Icons>
        <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://www.pexels.com/photo/sea-fashion-woman-blue-9510147/"
            onClick= {(e) => setOpen(true)}
          ></Avatar>
          <Typography variant="span"> John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
