
import React from 'react';
import { AppBar, Container, Typography, Grid, useTheme } from "@mui/material";
import Menu from './Menu/Menu.jsx';
import NavBar from './NavBar/NavBar.jsx';

const Header = () => {

      const theme = useTheme();

      return (

            <Grid container component="header" direction={"row"} justifyContent={"center"}>
                  <Grid item xs={12}>
                        <Typography fontFamily={"bold"} sx={theme.typography.headerText}>
                              LÍDER EN VENTA DE CELULARES Y ACCESORIOS EN ARGENTINA.
                        </Typography>
                  </Grid>
                  <Grid item xs={12} component="header" sx={{
                        ...theme.components.AppBar,

                        paddingBottom: '0.8rem',
                  }}>
                        <Menu />
                  </Grid>
                  <Grid item xs={12} component="nav" sx={{
                        ...theme.components.AppBar,
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                  }}>
                        <NavBar showDropdown={true} />
                  </Grid>
            </Grid>

      );
}

export default Header;
