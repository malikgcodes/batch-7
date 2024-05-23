import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function CustomNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/login" color="inherit">Login</Button>
        <Button component={Link} to="/register" color="inherit">Register</Button>
        <Button component={Link} to="/formik" color="inherit">Formik Form</Button>
        <Button component={Link} to="/multi-step" color="inherit">Multi-Step Form</Button>
        <Button component={Link} to="/table" color="inherit">Table</Button>
      </Toolbar>
    </AppBar>
  );
}

export default CustomNavbar;
