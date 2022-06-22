import * as React from "react"
import Header from "../components/Header"
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";

let darkTheme = createTheme({
  palette: {
    type: 'dark',
  }
});

darkTheme = responsiveFontSizes(darkTheme);
  
const IndexPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  )
}

export default IndexPage
