import React from "react";
import { Box, makeStyles, createStyles, Theme } from "@material-ui/core";
import homeBackground from "../../assets/images/home-background.jpg";
import homeImage from "../../assets/images/home-image.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      display: "flex",
      overflow: "hidden",
    },
    sectionOne: {
      display: "flex",
      width: "50%",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
    },
    sectionTwo: {
      width: "50%",
    },
    containerImage: {
      width: "100%",
      height: "100vh",
      position: "absolute",
      zIndex: 1,
    },
    image: {
      position: "relative",
      height: "80%",
      width: "70%",
      zIndex: 2,
      borderRadius: 10,
      opacity: "90%",
    },
  })
);

const DesktopAppAuth: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.sectionOne}>
        <img
          src={homeBackground}
          alt="none"
          className={classes.containerImage}
        />
        <img src={homeImage} alt="none" className={classes.image} />
      </Box>
      <Box className={classes.sectionTwo}>Section 2</Box>
    </Box>
  );
};

export default DesktopAppAuth;
