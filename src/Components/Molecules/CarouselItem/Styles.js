import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  hoodaLogo: {
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: 120,
      height: 105,
      marginBottom: 20,
    },
    [theme.breakpoints.up("sm")]: {
      width: 180,
      height: 160,
      marginBottom: 28,
    },
    [theme.breakpoints.up("md")]: {
      width: 230,
      height: 196,
    },
  },
  carouselImage: {
    width: "100%",
    height: 540,
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
    [theme.breakpoints.up("sm")]: {
      fontSize: 36,
      marginBottom: 28,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      marginBottom: 18,
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
      lineHeight: "25px",
    },
  },
}));
