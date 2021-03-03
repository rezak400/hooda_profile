import React from "react";
import useStyles from "./Styles";
import { Box } from "@material-ui/core";

const CarouselIndicator = ({ active, onClick }) => {
  const classes = useStyles();

  return (
    <Box
      onClick={onClick}
      className={classes.indicator}
      style={{
        width: active ? 28 : 16,
        borderRadius: active ? 100 : 8,
        backgroundColor: active ? "#F15D2A" : "#9CA3AF",
      }}
    />
  );
};

export default CarouselIndicator;
