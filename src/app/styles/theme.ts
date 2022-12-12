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