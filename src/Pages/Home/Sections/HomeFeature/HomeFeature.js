import React from "react";
import useStyles from "./Styles";
import Dummy from "./Dummy.json";
import { Container } from "@material-ui/core";
import { FeatureItem } from "../../../../Components";

const HomeFeature = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <FeatureItem
        reverse={false}
        title={Dummy[0].title}
        subtitle={Dummy[0].subtitle}
        image={Dummy[0].image}
      />
      <FeatureItem
        reverse={true}
        title={Dummy[1].title}
        subtitle={Dummy[1].subtitle}
        image={Dummy[1].image}
      />
    </Container>
  );
};

export default HomeFeature;
