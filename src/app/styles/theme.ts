import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#FAFAFA",
    },
  },
  palette: {
    primary: {
      main: "#3f51b5",
      dark: "#000000",
      light: "#FAFAFA",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#FAFAFA",
    },
  },
});

export default theme;
