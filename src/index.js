import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Routes from "./Routes";
// import "./index.css"; //! Untuk reset smua css
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core"; //! Untuk custom theme Material UI

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F15D2A",
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', "sans-serif"],
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1072,
      xl: 1280,
      xxl: 1536,
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
