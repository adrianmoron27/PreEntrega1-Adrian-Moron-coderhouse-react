import { AppBar, Toolbar, IconButton, InputBase, Box, Container, Grid, useTheme, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import logo from "../../../assets/imgs/logo/BunkerPhoneShopHeader.png";
import Dropdown from "./Dropdown/Dropdown.jsx";

const Menu = () => {

      const theme = useTheme();

      const [search, setSearch] = useState(false);

      const handleSearch = () => {
            setSearch(!search);
      };

      const styledMenu = {
            styledBox: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
            },
            styledInputBase: {
                  p: "0.25rem",
                  backgroundColor: "whitesmoke",
                  width: search ? "60%" : "50%",
                  transition: "width 0.3s ease-in-out",
                  fontFamily: "regular",
            },
            styledIconButton: {
                  color: "white",
                  backgroundColor: "#004095",
                  p: "0.45rem",
                  borderStartStartRadius: "0px",
                  borderEndStartRadius: "0px",
                  borderStartEndRadius: "5px",
                  borderEndEndRadius: "5px",
                  height: "100%",
                  width: "7.5%",
                  '&:hover': {
                        backgroundColor: '#007DFE',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                  },
            }
      }


      return (
            <>

                  <Toolbar sx={theme.components.Toolbar}>
                        <Grid container justifyContent={"space-between"} alignItems={"center"} columnSpacing={1} direction={"row"} >
                              <Grid item xxl={2} xl={2} lg={1} md={1} sm={2} xs={5} sx={{
                                    textAlign: "start",
                              }}>
                                    <Link to="/">
                                          <img src={logo} alt="logo" style={{
                                                height: "7vh",
                                          }} />
                                    </Link>
                              </Grid>

                              <Grid item xxl={8} xl={8} lg={10} md={10} sm={8} xs={2} >

                                    <Box sx={styledMenu.styledBox}>
                                          <Dropdown type={"menu"} />
                                          <InputBase
                                                onClick={handleSearch}
                                                placeholder="Buscar…"
                                                sx={styledMenu.styledInputBase}
                                          />
                                          <IconButton
                                                onClick={handleSearch}
                                                size="large"
                                                sx={styledMenu.styledIconButton}>
                                                <SearchIcon sx={{ fontSize: theme.icons.sizes.xs }} />
                                          </IconButton>
                                    </Box>

                              </Grid>

                              <Grid item xxl={2} xl={2} lg={1} md={1} sm={2} xs={5} sx={{
                                    textAlign: "end",
                              }}>
                                    <PersonIcon onClick={console.log('testLogin')} sx={{
                                          color: theme.palette.primary.main, fontSize: theme.icons.sizes.xxl,
                                          ":hover": {
                                                color: theme.palette.primary.dark,
                                                cursor: "pointer",
                                          }
                                    }} />
                              </Grid>
                        </Grid>
                  </Toolbar>

            </>
      );
};

export default Menu;