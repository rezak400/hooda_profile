import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  containerNoReverse: {
    display: "flex",
    marginBottom: 120,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column-reverse",
    },
  },
  containerReverse: {
    display: "flex",
    marginBottom: 120,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row-reverse",
    },
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column-reverse",
    },
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      fontSize: 36,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: 30,
    },
  },
  title: {
    marginBottom: 28,
    fontWeight: 700,
    [theme.breakpoints.up("lg")]: {
      fontSize: 36,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: 30,
    },
  },
  subtitle: {
    marginBottom: 28,
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
      lineHeight: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "30px",
    },
  },
  gap: {
    [theme.breakpoints.up("lg")]: {
      width: 600,
    },
    [theme.breakpoints.down("lg")]: {
      height: 40,
    },
  },
}));
