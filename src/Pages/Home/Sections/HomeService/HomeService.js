import React from "react";
import useStyles from "./Styles";
import { Container, Grid, Typography } from "@material-ui/core";

const HomeService = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        Layanan Tersedia
      </Typography>
      <Grid container spacing={3}>
          
      </Grid>
    </Container>
  );
};

export default HomeService;
