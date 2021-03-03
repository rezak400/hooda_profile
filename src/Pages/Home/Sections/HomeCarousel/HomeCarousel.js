import React from "react";
import useStyles from "./Styles";
import Dummy from "./Dummy.json";
import { Box } from "@material-ui/core";
import { CarouselContent, CarouselIndicator } from "../../../../Components";

const HomeCarousel = () => {
  const classes = useStyles();

  return (
    <Box className={classes.carouselBox}>
      {/* OPEN TAG CAROUSEL */}
      {/* {Dummy.map((value) => (
        <CarouselContent
          title={value.title}
          subtitle={value.subtitle}
          imageSource={value.image}
        />
      ))} */}
      {/* CLOSE TAG CAROUSEL */}
    </Box>
  );
};

export default HomeCarousel;
