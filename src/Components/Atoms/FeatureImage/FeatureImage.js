import React from "react";
import useStyles from "./Styles";
import { Avatar, Box } from "@material-ui/core";

const FeatureImage = ({ srcImage, reverse }) => {
  const classes = useStyles();

  return (
    <Box
      className={
        reverse 
        ? classes.containerReverse 
        : classes.containerNoReverse
      }
    >
      <Box className={classes.shape} />
      <Avatar
        src={srcImage}
        variant="square"
        className={classes.image}
        style={{ right: !reverse && 30, left: reverse && 30 }}
      />
    </Box>
  );
};

export default FeatureImage;
