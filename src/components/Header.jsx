import React, { useState } from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { AppBar, Button, Container, Divider, Grid, Hidden, IconButton, List, ListItem, Menu, MenuItem, Paper, SwipeableDrawer, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  button: {
    fontWeight: 400,
    fontSize: 1.125 + 'rem',
    color: 'white',
    display: 'block'
  }
}));

export default function Header() {
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Container maxWidth="lg">
          <Toolbar>
            <Hidden mdUp>
              <IconButton sx={{ color: 'white', }} onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Divider variant="middle" flexItem />
              <Typography fontFamily="Poppins" component="h1" variant="h4">FASERJ</Typography>
            </Hidden>
            <Hidden mdDown>
              <Box sx={{
                alignItems: 'center',
                flexGrow: 1,
                display: 'flex'
              }}>
                <Typography component="h1" variant="h4">FASERJ</Typography>
                <Divider variant="middle" flexItem />
                <Button sx={(theme) => ({
                  color: 'white',
                  fontWeight: 400,
                  display: 'block',
                  '&:hover': {
                    color: theme.palette.secondary.main
                  }
                })} >
                  Início
                </Button>
              </Box>
            </Hidden>
            <SwipeableDrawer
              anchor="left"
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
