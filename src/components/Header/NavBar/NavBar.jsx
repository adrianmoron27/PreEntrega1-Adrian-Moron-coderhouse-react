import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, useTheme, Box, } from '@mui/material';
import { PhoneAndroidOutlined, HeadphonesOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Dropdown from '../Menu/Dropdown/Dropdown.jsx';
import CartWidget from '../../CartWidget/CartWidget.jsx';

const NavBar = ({ showDropdown }) => {

      const theme = useTheme();

      const categories = [
            { icon: PhoneAndroidOutlined, text: 'CELULARES', link: '/celulares' },
            { icon: HeadphonesOutlined, text: 'ACCESORIOS', link: '/accesorios' },
            { icon: LocalOfferOutlined, text: 'OFERTAS', link: '/ofertas' },
      ];

      return (
            <AppBar position="sticky" elevation={0} style={{
                  backgroundColor: "#fff",
            }}>

                  <Toolbar sx={theme.components.Toolbar
                  } >

                        <Grid container alignItems="center" justifyContent="space-between">

                              <Grid item>

                                    {showDropdown ? (

                                          <Dropdown type={"navbar"} />

                                    ) : (

                                          <Grid container spacing={2}>

                                                {categories.map((category, index) => (
                                                      <Grid item key={index} >

                                                            <Button component={Link} to={category.link} startIcon={<category.icon />} sx={{
                                                                  fontSize: theme.icons.sizes.xs,
                                                                  textColor: theme.palette.primary.main,
                                                                  marginTop: "0.25rem",
                                                            }}>
                                                                  <Typography fontFamily={"bold"} style={{
                                                                        fontSize: theme.typography.fontSize.sm,
                                                                        color: theme.palette.secondary.main,
                                                                  }}>
                                                                        {category.text}
                                                                  </Typography>
                                                            </Button>

                                                      </Grid>
                                                ))}

                                          </Grid>

                                    )}

                              </Grid>

                              <Grid item sx={{
                                    textAlign: "end",
                              }}>

                                    <Box sx={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                    }}>
                                          <Typography fontFamily={"regular"} style={{
                                                color: theme.palette.secondary.main,
                                                fontSize: theme.typography.fontSize.md,
                                                marginRight: "0.5rem",
                                                marginTop: "0.25rem",
                                          }}>
                                                0 item(s) - $0

                                          </Typography>

                                          <CartWidget totalQuantity={2} />

                                    </Box>

                              </Grid>

                        </Grid>

                  </Toolbar>

            </AppBar >
      );
};

export default NavBar;
