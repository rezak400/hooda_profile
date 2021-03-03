import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  carouselImage: {
    width: "100%",
    height: 445,
    objectFit: "cover",
    position: "relative",
  },
  textContent: {
    position: "absolute",
    margin: "auto",
    left: 0,
    right: 0,
    bottom: 64,
    [theme.breakpoints.up("lg")]: {
      paddingInline: 384,
    },
    [theme.breakpoints.down("lg")]: {
      paddingInline: 80,
    },
  },
  title: {
    color: "#FFFFFF",
    textAlign: "left",
    fontWeight: 700,
    marginBottom: 28,
    [theme.breakpoints.up("sm")]: {
      fontSize: 36,
      lineHeight: 40,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      lineHeight: 36,
    },
  },
  subtitle: {
    color: "#FFFFFF",
    textAlign: "left",
    fontWeight: 700,
    marginBottom: 28,
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
      lineHeight: 28,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: 24,
    },
  },
}));
