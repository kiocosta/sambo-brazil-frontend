import * as React from "react"
import Header from "../components/Header"
import { Box, createTheme, CssBaseline, Divider, Grid, Hidden, Paper, responsiveFontSizes, ThemeProvider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { StaticImage } from "gatsby-plugin-image";

let darkTheme = createTheme({
  palette: {
    primary: {
      main: '#090909',
      contrastText: '#fff'
    },
    secondary: {
      main: '#4587D4',
    },
    white: '#fff',
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

const useStyles = makeStyles((theme) => ({
  section: {
    height: '20vh',
    position: 'relative',
  },
  content: {
    height: '100%',
    width: '100%',
    color: '#FFF',
    zIndex: 2,
    position: 'relative',
  },
  container: {
    height: '100%',
    width: '100%',
    margin: '0 auto',
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    zIndex: -1,
    position: 'absolute'
  }
}));

darkTheme = responsiveFontSizes(darkTheme);

const IndexPage = () => {
  const styles = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <div className={styles.overlay}></div>
      <Paper 
        sx={{ backgroundColor: 'transparent' }}
        variant="outlined" 
        className={styles.section}>
        <StaticImage
          className={styles.backgroundImage}
          src="https://sambo.sport/upload/iblock/d2b/d2b8116ea72f9e67079023167528d87d.JPG"
        />
        <Container
          className={styles.container}
        >
          <Grid
            className={styles.content}
            container
            alignItems="center"
            justifyContent="center">
            <Grid item>
              <Typography
                fontWeight="400"
                variant="h4">
                Federação Amadora de Sambo do Estado do Rio de Janeiro
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      {/* <Container sx={{zIndex: 100, position: 'relative'}} >
      </Container> */}
    </ThemeProvider>
  )
}

export default IndexPage;
