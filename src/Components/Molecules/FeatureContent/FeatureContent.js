import React from "react";
import useStyles from "./Styles";
import { Avatar, Box, Container, Typography } from "@material-ui/core";
import { FeatureImage } from "../../Atoms";

const FeatureContent = ({ title, subtitle, image, reverse = false }) => {
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

export default FeatureContent;

{
  /* <div className="flex lg:flex-row flex-col-reverse mb-28 justify-center items-center">
  <div className="flex flex-col">
    <h1 className="lg:text-4xl text-3xl font-bold mb-7">
      Staple Goods Program
    </h1>
    <p className="sm:text-base text-sm sm:leading-8 leading-7">
      Beneficiaries receive staple goods packages consisting of basic needs such
      as rice, cooking oil, and instant foods. As of May 24th 2020, we have
      distributed 455,000 staple goods vouchers for our driver-partners via
      Alfamart. In this program free meals are provided for healthcare workers.
      As of May 24th 2020, we have distributed 176,000 free meal packages for
      healthcare workers at 15 hospitals across the city area. which also helps
      them earn additional income. As of May 24th 2020, we have distributed
      640,000 family meals vouchers. at specially always makes all have selected
      micro, small, and medium sized enterprises.{" "}
    </p>
  </div>
  <div className="lg:mr-20 mr-0 mb-20" />
  <div className="relative sm:ml-0 ml-7">
    <div className="bg-primary rounded-lg sm:w-96 sm:h-96 w-72 h-72" />
    <img
      src={FeatureImageOne}
      className="rounded-lg object-cover absolute top-7 right-7 sm:w-96 sm:h-96 w-72 h-72"
    />
  </div>
</div>; */
}
