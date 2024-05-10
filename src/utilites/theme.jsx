import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#08B19C",
    },
    secondary: {
      main: "#002D5B",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default theme;
