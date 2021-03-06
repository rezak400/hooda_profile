import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  carouselBox: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      marginTop: 62.06,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 64,
    },
  },
}));
