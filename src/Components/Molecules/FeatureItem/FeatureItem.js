import React from "react";
import useStyles from "./Styles";
import { Box, Typography } from "@material-ui/core";
import { FeatureImage } from "../../Atoms";

const FeatureItem = ({ title, subtitle, image, reverse = false }) => {
  const classes = useStyles();

  return (
    <Box
      className={
        reverse ? classes.containerReverse : classes.containerNoReverse
      }
    >
      <Box className={classes.textContent}>
        <Typography variant="h1" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </Box>
      <Box className={classes.gap} />
      <FeatureImage srcImage={image} reverse={reverse} />
    </Box>
  );
};

export default FeatureItem;
