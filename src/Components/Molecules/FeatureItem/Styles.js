import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  containerNoReverse: {
    display: "flex",
    marginBottom: 70,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  containerReverse: {
    display: "flex",
    marginBottom: 70,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row-reverse",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      marginTop: 50,
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: 50,
    },
  },
  title: {
    marginBottom: 28,
    fontWeight: 700,
    [theme.breakpoints.up("sm")]: {
      fontSize: 36,
    },
    [theme.breakpoints.down("sm")]: {
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
      lineHeight: "28px",
    },
  },
  gap: {
    [theme.breakpoints.up("md")]: {
      width: 700,
    },
    [theme.breakpoints.down("md")]: {
      height: 40,
    },
  },
}));
