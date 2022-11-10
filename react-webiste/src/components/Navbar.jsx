import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import Pets from "@mui/icons-material/Pets";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
        backgroundColor: "white",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs:'none', sm:"block"}}}> Milltech </Typography>
        <Pets sx={{display: {xs:'block', sm:"none"}}}></Pets>
        <Search>Search</Search>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
