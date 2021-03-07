import { makeStyles } from "@material-ui/styles";
import { FooterImage } from '../../../Assets/'

export default makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
    containerCustom: {
        padding: 0,
        [theme.breakpoints.up("xs")]: {
        },
        [theme.breakpoints.up("sm")]: {
            maxWidth: theme.breakpoints.values.sm,
        },
        [theme.breakpoints.up("md")]: {
            maxWidth: theme.breakpoints.values.md,

        },
        [theme.breakpoints.up("lg")]: {
            maxWidth: theme.breakpoints.values.lg,
        },
        [theme.breakpoints.up("xxl")]: {
            maxWidth: 1920,
        },
    },
    list: {
        [theme.breakpoints.up("xs")]: {
            textAlign: "center"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "left"
        },
    }
}));
