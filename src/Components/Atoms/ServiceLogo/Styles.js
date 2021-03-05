import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container: {
    width: 100,
    height: 100,
    borderRadius: 24,
    marginTop: 14,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: 500,
    marginTop: 4,
    color: "#FFFFFF",
  },
  logo: {
    objectFit: "cover",
  },
}));
