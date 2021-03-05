import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    container: {
        padding: 0,
        [theme.breakpoints.up("sm")]: {
        },
        [theme.breakpoints.up("md")]: {
        },
        [theme.breakpoints.up("lg")]: {
            maxWidth: theme.breakpoints.values.lg,

        },
        [theme.breakpoints.up("xxl")]: {
            maxWidth: 1920,
        },
    },
}));
