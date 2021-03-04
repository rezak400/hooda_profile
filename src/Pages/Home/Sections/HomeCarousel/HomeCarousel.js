import React from "react";
import useStyles from "./Styles";
import Dummy from "./Dummy.json";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@material-ui/core";
import { CarouselContent, CarouselIndicator } from "../../../../Components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeCarousel = () => {
  const classes = useStyles();

  return (
    <Box className={classes.carouselBox}>
      <Carousel
        autoPlay
        infiniteLoop
        swipeable
        interval={3000}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        renderIndicator={(clickHandler, isSelected) => (
          <CarouselIndicator active={isSelected} onClick={clickHandler} />
        )}
      >
        {Dummy.map((value, index) => (
          <CarouselContent
            key={index}
            title={value.title}
            subtitle={value.subtitle}
            imageSource={value.image}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default HomeCarousel;
