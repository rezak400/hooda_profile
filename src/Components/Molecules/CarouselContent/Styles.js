import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  carouselImage: {
    width: "100%",
    height: 500,
    objectFit: "cover",
    position: "relative",
  },
  textContent: {
    position: "absolute",
    margin: "auto",
    left: 0,
    right: 0,
    bottom: 48,
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
  title: {
    color: "#FFFFFF",
    textAlign: "left",
    fontWeight: 700,
    marginBottom: 28,
    [theme.breakpoints.up("sm")]: {
      fontSize: 36,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  subtitle: {
    color: "#FFFFFF",
    textAlign: "left",
    marginBottom: 28,
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
      lineHeight: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "26px",
    },
  },
}));
