import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    paddingTop: 96,
    paddingBottom: 80,
    [theme.breakpoints.up("xs")]: {
      maxWidth: 640,
      paddingInline: "1.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 768,
      paddingInline: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 1024,
      paddingInline: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1280,
      paddingInline: "6rem",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1920,
      paddingInline: "7rem",
    },
  },
}));
