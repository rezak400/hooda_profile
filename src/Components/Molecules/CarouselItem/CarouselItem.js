import React from "react";
import useStyles from "./Styles";
import { Avatar, Box, Container, Typography } from "@material-ui/core";
import { HoodaCarouselLogo } from "../../../Assets/Images";

const CarouselItem = ({ title, subtitle, imageSource }) => {
  const classes = useStyles();

  return (
    <Box>
      <Avatar
        src={imageSource}
        variant="square"
        className={classes.carouselImage}
      />
      <Container className={classes.textContent}>
        <Avatar
          variant="square"
          src={HoodaCarouselLogo}
          className={classes.hoodaLogo}
        />
        <Typography variant="h1" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
};

export default CarouselItem;
