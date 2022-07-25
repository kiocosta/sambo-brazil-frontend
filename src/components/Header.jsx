import React, { useState } from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { AppBar, Button, Container, Divider, Grid, Hidden, IconButton, List, ListItem, Menu, MenuItem, Paper, SwipeableDrawer, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import logoFaserj from '../images/logo-faserj.png';
import { StaticImage } from "gatsby-plugin-image";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import * as NavMenu from '../common/constants';

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  logoFaserj: {
    maxWidth: '8rem',
  },
  menuButton: {
    '&:hover': {
      color: theme.palette.red300,
      backgroundColor: 'unset !important',
    }
  },
}));

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const handleMenuClick = (item) => {
    setOpenMenu(item);
  };
  const handleClose = () => {
    openMenu(null);
  };
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Container maxWidth="lg">
          <Toolbar>
            <Hidden mdDown>
              <Box sx={{
                alignItems: 'center',
                flexGrow: 1,
                display: 'flex'
              }}>
                <img
                  className={styles.logoFaserj}
                  src={logoFaserj}
                />
                <Divider variant="middle" flexItem />
                {
                  NavMenu.MenuItems.map((item, index) =>
                  (
                    <PopupState key={index} variant="popover" popupId="header-popup-menu">
                      {
                        (popupState) => (
                          <>
                            <Button {...bindTrigger(popupState)}>
                              {item.label} {item.children && <ExpandMoreIcon />}
                            </Button>
                            {
                              item.children &&
                                <Menu {...bindMenu(popupState)}>
                                  {item.children.map((child, index) => (
                                    <MenuItem key={index} onClick={popupState.close} className={styles.menuButton}>
                                      {child.label}
                                    </MenuItem>
                                  ))}
                                </Menu>
                            }
                          </>
                        )
                      }
                    </PopupState>
                  ))
                }
              </Box>
            </Hidden>
            <Hidden mdUp>
              <IconButton sx={{ color: 'black', }} onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Divider variant="middle" flexItem />
              <StaticImage
                src={logoFaserj}
              />
            </Hidden>
            <SwipeableDrawer
              anchor="right"
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
            >
              <div
                onClick={() => setOpen(false)}
                role="button"
                tabIndex={0}
              >
                <IconButton>
                  <ChevronRightIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem>
                  INÍCIO
                </ListItem>
              </List>
            </SwipeableDrawer>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
