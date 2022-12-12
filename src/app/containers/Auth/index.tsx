import React from "react";
import { withWidth, WithWidthProps, Box } from "@material-ui/core";
import MobileAppAuth from "../../components/Auth/MobileAppAuth";
import DesktopAppAuth from "../../components/Auth/DesktopAppAuth";

const AuthenticationContainer: React.FC<WithWidthProps> = ({ width }) => {
  const getViewSize = () => {
    const isSmallScreen = width === "sm" || width === "xs";
    return isSmallScreen ? <MobileAppAuth /> : <DesktopAppAuth />;
  };

  return <Box>{getViewSize()}</Box>;
};

export default withWidth()(AuthenticationContainer);
