import React from "react";
import useStyles from "./Styles";
import { Paper, Typography } from "@material-ui/core";
import { ServiceLogo } from "../../Atoms";

const ServiceItem = ({ name, description, color, logo, width, height }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <ServiceLogo
        name={name}
        logo={logo}
        backgroundColor={color}
        width={width}
        height={height}
      />
      <Typography variant="subtitle1" className={classes.description}>
        {description}
      </Typography>
    </Paper>
  );
};

export default ServiceItem;
