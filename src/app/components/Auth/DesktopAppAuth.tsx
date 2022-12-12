import React from "react";
import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  // Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      backgroundColor: theme.palette.primary.main,
    },
  })
);

const DesktopAppAuth: React.FC = () => {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
};

export default DesktopAppAuth;
