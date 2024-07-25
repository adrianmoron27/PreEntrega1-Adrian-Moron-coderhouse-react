import React, { useState } from 'react';
import { Button, Menu, MenuItem, IconButton, InputBase, Box, Typography, useTheme } from '@mui/material';
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Dropdown = ({ type }) => {

      const theme = useTheme();

      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);

      const handleOpen = (event) => {
            setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
            setAnchorEl(null);
      };

      const styledDropdowns = {
            styledMenuItems: {
                  menu: {
                        backgroundColor: theme.palette.primary.dark,
                        margin: 0,
                        '&:hover': {
                              backgroundColor: theme.palette.primary.main,
                        }
                  },
                  navbar: {
                        backgroundColor: theme.palette.primary.main,
                        margin: 0,
                        '&:hover': {
                              backgroundColor: theme.palette.primary.dark,
                        }
                  }

            },
            styledIconButtons: {
                  menu: {
                        color: "white",
                        backgroundColor: theme.palette.primary.dark,
                        borderStartStartRadius: "5px",
                        borderEndStartRadius: "5px",
                        borderStartEndRadius: "0px",
                        borderEndEndRadius: "0px",
                        '&:hover': {
                              backgroundColor: theme.palette.primary.main,
                        }
                  },
                  navbar: {
                        color: "white",
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                              backgroundColor: theme.palette.primary.dark,
                        }
                  }
            },
            styledMenu: {
                  menu: {
                        '& .MuiPaper-root': {
                              backgroundColor: theme.palette.primary.dark,
                              color: 'white',
                              borderRadius: '0px',
                              marginTop: '0.5rem',
                        },
                        padding: '0rem',
                  },
                  navbar: {
                        '& .MuiPaper-root': {
                              backgroundColor: theme.palette.primary.main,
                              color: 'white',
                              borderRadius: '0px',
                              marginTop: '0.5rem',
                        },
                        padding: '0rem',
                  }
            }

      }

      const renderMenuItems = () => {

            if (type === 'menu') {

                  return [
                        <Typography fontFamily={"semiBold"} sx={{ color: "white", fontSize: theme.typography.fontSize.md }}>
                              <MenuItem key="cel" sx={styledDropdowns.styledMenuItems.menu}>Celulares</MenuItem>
                              <MenuItem key="acc" sx={styledDropdowns.styledMenuItems.menu}>Accesorios</MenuItem>
                        </Typography>
                  ];

            } else if (type === 'navbar') {

                  return [
                        <Typography fontFamily={"bold"} sx={{ color: "white", fontSize: theme.typography.fontSize.md }}>
                              <MenuItem key="celulares" sx={styledDropdowns.styledMenuItems.navbar}>Celulares</MenuItem>
                              <MenuItem key="accesorios" sx={styledDropdowns.styledMenuItems.navbar}>Accesorios</MenuItem>
                              <MenuItem key="ofertas" sx={styledDropdowns.styledMenuItems.navbar}>Ofertas</MenuItem>
                              <MenuItem key="filtros" sx={styledDropdowns.styledMenuItems.navbar}>Filtros</MenuItem>
                              <MenuItem key="buscar" sx={styledDropdowns.styledMenuItems.navbar}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                          <InputBase placeholder="Buscar…" />
                                          <IconButton sx={{ p: '10px' }}>
                                                <AccountCircle />
                                          </IconButton>
                                    </Box>
                              </MenuItem>
                        </Typography>
                  ];

            }

      };

      return (
            <>
                  {type === 'menu' ? (
                        <>
                              <IconButton
                                    id="filter-button"
                                    aria-controls={open ? 'filter-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleOpen}
                                    sx={styledDropdowns.styledIconButtons.menu}
                              >
                                    <Typography fontFamily={"semiBold"} sx={{ color: "white", fontSize: theme.typography.fontSize.md }}>Filtros
                                    </Typography>      <ArrowDropDownIcon />
                              </IconButton>

                        </>
                  ) : (
                        <IconButton
                              id="navbar-button"
                              aria-controls={open ? 'navbar-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              onClick={handleOpen}
                              sx={styledDropdowns.styledIconButtons.navbar}
                        >
                              <MenuIcon sx={{
                                    fontSize: theme.icons.sizes.md,
                              }} />
                        </IconButton>
                  )}

                  <Menu
                        id={type === 'menu' ? 'filter-menu' : 'navbar-menu'}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                              'aria-labelledby': type === 'menu' ? 'filter-button' : 'navbar-button',
                        }}
                        sx={styledDropdowns.styledMenu[type]}
                  >

                        {renderMenuItems()}
                  </Menu>
            </>
      );
};

export default Dropdown;
