import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  containerReverse: {
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      marginRight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 28,
    },
  },
  containerNoReverse: {
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 28,
    },
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 8,
    [theme.breakpoints.up("xs")]: {
      width: 384,
      height: 384,
    },
    [theme.breakpoints.down("xs")]: {
      width: 240,
      height: 240,
    },
  },
  image: {
    borderRadius: 8,
    objectFit: "cover",
    position: "absolute",
    top: 30,
    [theme.breakpoints.up("xs")]: {
      width: 384,
      height: 384,
    },
    [theme.breakpoints.down("xs")]: {
      width: 240,
      height: 240,
    },
  },
}));
