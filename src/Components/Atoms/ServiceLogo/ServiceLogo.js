import React from "react";
import useStyles from "./Styles";
import { Avatar, Container, Typography } from "@material-ui/core";

const ServiceLogo = ({
  name,
  logo,
  backgroundColor,
  width = 50,
  height = 50,
}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} style={{ logo, backgroundColor }}>
      <Avatar
        variant="square"
        src={logo}
        style={{ width, height }}
        className={classes.logo}
      />
      <Typography variant="h6" className={classes.name}>
        {name}
      </Typography>
    </Container>
  );
};

export default ServiceLogo;
