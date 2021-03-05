import React from "react";
import useStyles from "./Styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { ServiceItem } from "../../../../Components";
import {
  IcBuy,
  IcFlash,
  IcFood,
  IcToday,
  IcTomorrow,
} from "../../../../Assets/Images";

const HomeService = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        Layanan Tersedia
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl>
          <ServiceItem
            name="Today"
            color="#F15722"
            logo={IcToday}
            width={45}
            height={45}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis integer aenean cursus iaculis erat vestibulum."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl>
          <ServiceItem
            name="Tomorrow"
            color="#28AAE1"
            logo={IcTomorrow}
            width={42.59}
            height={46.32}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis integer aenean cursus iaculis erat vestibulum."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl>
          <ServiceItem
            name="Flash"
            color="#90278E"
            logo={IcFlash}
            width={31.1}
            height={49.11}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis integer aenean cursus iaculis erat vestibulum."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl>
          <ServiceItem
            name="Buy"
            color="#FFC612"
            logo={IcBuy}
            width={35.4}
            height={44}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis integer aenean cursus iaculis erat vestibulum."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl>
          <ServiceItem
            name="Food"
            color="#EC297B"
            logo={IcFood}
            width={47.34}
            height={48}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis integer aenean cursus iaculis erat vestibulum."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeService;
