import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  paper: {
    width: "auto",
    height: "auto",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.15)",
  },
  description: {
    marginTop: 30,
    marginBottom: 14,
    fontSize: 12,
    lineHeight: "18px",
    textAlign: "center",
  },
}));
