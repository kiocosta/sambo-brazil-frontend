import React, { useState } from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { AppBar, Container, Divider, Hidden, IconButton, List, ListItem, SwipeableDrawer, Tab, Tabs, Toolbar } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
}));

export default function Header() {
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  return (
    <StaticQuery
      query={
        graphql`
          query Menu {
            allStrapiMenu {
              nodes {
                item {
                  label
                  url
                }
              }
            }
          }
        `
      }
      render={data => {
        const menuItens = data.allStrapiMenu.nodes[0].item;
        return (<header>
          <AppBar position="sticky" color="default">
            <Container maxWidth="xl">
              <Toolbar>
                <Hidden mdUp>
                  <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpen(true)}>
                    <MenuIcon />
                  </IconButton>
                </Hidden>
                <Hidden mdDown>
                  <Tabs>
                    {
                      menuItens.map((menuItem, key) => <Tab key={key} label={menuItem.label} />)
                    }
                  </Tabs>
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
                      {
                        menuItens.map((item, index) => (
                          <ListItem key={index}>
                            <Link
                              className={styles.link}
                              color="textPrimary"
                              variant="button"
                              underline="none"
                              href={item.href}
                            >
                              {item.label}
                            </Link>
                          </ListItem>
                        ))
                      }
                    </List>
                  </SwipeableDrawer>
              </Toolbar>
            </Container>
          </AppBar>
        </header>)
      }}
    />
  )
}
