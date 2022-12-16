import React from "react";
import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import homeBackground from "../../assets/images/home-background.jpg";
import homeImage from "../../assets/images/home-image.jpg";
import AuthForm from "./AuthForm/AuthForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      display: "flex",
      overflow: "hidden",
    },
    sections: {
      display: "flex",
      width: "50%",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
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
    bannerTitle: {
      fontSize: 40,
    },
    bannerText: {
      fontSize: 30,
    },
  })
);

const DesktopAppAuth: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.sections}>
        <img
          src={homeBackground}
          alt="none"
          className={classes.containerImage}
        />
        <img src={homeImage} alt="none" className={classes.image} />
      </Box>
      <Box className={classes.sections}>
        <Typography className={classes.bannerTitle}>Hello Again!</Typography>
        <Typography className={classes.bannerText}>
          Welcome back you’ve been missed!
        </Typography>
        <AuthForm />
      </Box>
    </Box>
  );
};

export default DesktopAppAuth;
